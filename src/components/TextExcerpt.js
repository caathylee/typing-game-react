import React from 'react';
const data = require('./../blurbs.json');

class TextExcerpt extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: data.blurbs,
			timeElapsed: 0,
			wpm: "",
			minutes: 0,
			seconds: 0,
			timeDisplayed: "00:00" 
		}
		this.startStopwatch = false;
		this.pressedBackspace = false;
		this.random = Math.floor(Math.random()*this.state.data.length);
		this.text = this.state.data[this.random].text;
		this.textArray = this.text.split(" ");
		this.totalWords =  this.textArray.length;
		this.index = 0;
		this.wordCount = 0;
		this.stopwatch;
		
		this.handleChange = this.handleChange.bind(this);
		this.displayTimeElapsed = this.displayTimeElapsed.bind(this);
	}

	displayTimeElapsed() {
		this.setState({
			timeElapsed: this.state.timeElapsed+1,
			seconds: ++this.state.seconds,
			timeDisplayed: "0" + this.state.minutes + ":" + this.state.seconds 
		});

		if(this.wordCount>0) {
			this.setState({
				wpm: Math.floor(this.wordCount*(60/this.state.timeElapsed))
			});
			
		}

		if(this.state.timeElapsed >=60) {
			this.setState({
				minutes: this.state.minutes++,
				seconds: 0
			})
		}
		if(this.state.seconds<10) {
			this.setState({
				timeDisplayed: 0 + this.state.minutes + ":0" + this.state.seconds
			});
		}

	}

	handleChange() {
		if (document.getElementById('btn-countdown'))
		{
			document.getElementById('typing-field').value="";
			return;
		}

		if (!this.stopwatch)
			this.stopwatch = setInterval(this.displayTimeElapsed, 1000);

		var currentWord = this.textArray[this.index];
		var typingFieldValue = document.getElementById('typing-field').value;
		var currentLetter= typingFieldValue.slice(-1);
		var lastWord = this.index >= this.textArray.length-1;

		if (typingFieldValue == (lastWord ? currentWord : currentWord + " ")) {
			this.letterIndex = 0;
			this.index++;
			this.wordCount++;
			document.getElementById('typing-field').value = "";

			if (lastWord) {
				clearInterval(this.stopwatch);
			}
		}
		this.setState({});
	}


	render() {
		var paragraph = this.textArray;
		var correct = paragraph.slice(0, this.index).join(" ");
		if (this.index < this.textArray.length)
			correct += " ";
		var rest = this.index <= paragraph.length ? paragraph.slice(this.index+1).join(" ") : "";

		var word = paragraph[this.index];

		var letterCorrect = "";
		var letterIncorrect = "";
		var letterRest = "";

		var typingField = document.getElementById('typing-field');
		var input = typingField ? typingField.value : "";

		var incorrect = false;
		for(var i=0; word && i<word.length; i++) {
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
				
				<input id="typing-field" type="text" placeholder="Type here" autoFocus onChange={this.handleChange}/>
				<p id="time-elapsed">Time Elapsed: {this.state.timeDisplayed}</p>
				<p>WPM: {this.state.wpm}</p>
			</div>
		)
	}
}

export default TextExcerpt;