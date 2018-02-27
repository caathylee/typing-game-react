import React from 'react';
const data = require('./../blurbs.json');

class TextExcerpt extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: data.blurbs
		}

		this.pressedBackspace = false;
		this.random = Math.floor(Math.random()*this.state.data.length);
		this.text = this.state.data[this.random].text;
		this.textArray = this.text.split(" ");
		this.index = 0;
		
		this.handleChange = this.handleChange.bind(this);
		this.onKeyDown = this.onKeyDown.bind(this);
		console.log("this is pressedBackspace " + this.state.pressedBackspace);
	}

	onKeyDown(e) {
		const keyCode = e.keyCode;
		if(keyCode == 8) {
			this.pressedBackspace = true;
			this.setState({});
		}
		console.log("i'm in keydown and this is pressedBackspace " + this.pressedBackspace);
	}

	handleChange() {

		var currentWord = this.textArray[this.index];
		var typingFieldValue = document.getElementById('typing-field').value;
		var currentLetter= typingFieldValue.slice(-1);
		var lastWord = this.index >= this.textArray.length-1;

		console.log("currentWord: " + currentWord);
		console.log("currentLetter: " + currentLetter);
		
		//if current char is wrong, close tag and add <span className="wrong-char"></span>

		if (typingFieldValue == (lastWord ? currentWord : currentWord + " ")) {
			this.letterIndex = 0;
			this.index++;
			document.getElementById('typing-field').value = "";

			if (lastWord) {
				// do something here. we finished typing everything
			}
		}
		this.setState({});
	}

	checkTyping() {
		console.log("We here in checkTyping()");
	}


	render() {
		var paragraph = this.textArray;
		var correct = paragraph.slice(0, this.index).join(" ");
		if (this.index < this.textArray.length)
			correct += " ";
		var rest = paragraph.slice(this.index+1).join(" ");


		var word = paragraph[this.index];

		var letterCorrect = "";
		var letterIncorrect = "";
		var letterRest = "";

		var typingField = document.getElementById('typing-field');
		var input = typingField ? typingField.value : "";

		var incorrect = false;
		for(var i=0; i<word.length; i++) {
			if(input[i] == undefined) {
				letterRest += word[i];
			}
			else if(!incorrect && word[i] == input[i]) {
				letterCorrect += word[i];
			} 
			else {
				letterIncorrect += word[i];
				incorrect = true;
			}
		}
		letterRest += " ";

		return (
			<div id="text-excerpt">
					<div className="book">
						<p id="paragraph">
							<span className="right-char">{correct}</span>
							<span className="current-word">
								<span className="right-char">{letterCorrect}</span>
								<span className="wrong-char">{letterIncorrect}</span>
								{letterRest}
							</span>
							{rest}
						</p>
					</div>
			
				<input id="typing-field" type="text" placeholder="Type here" autoFocus onKeyDown={this.onKeyDown} onChange={this.handleChange}/>
			</div>
		)
	}
}

export default TextExcerpt;