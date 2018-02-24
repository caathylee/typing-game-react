import React from 'react';
const data = require('./../blurbs.json');

class TextExcerpt extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			data: data.blurbs
		}
	}
	render() {
		var random = Math.floor(Math.random()*this.state.data.length);
		return (
			<div id="text-excerpt">
				{
					<div className="book">
						<p>{this.state.data[random].text}</p>
					</div>
				}
			
				<input className="typing-field" type="text" placeholder="Type here" autoFocus/>
			</div>
		)
	}
}

export default TextExcerpt;