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
		return (
			<div className="test-component">
				<h2>Text</h2>
				<h2>Text below is generated from blurbs.json</h2>

				{this.state.data.map((book, index) =>
					<div className="book" key={index}>
						<p>{book.text}</p>
					</div>
				)}

				
			</div>
		)
	}
}

export default TextExcerpt;