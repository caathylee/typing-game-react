import React from 'react';

class TextExcerpt extends React.Component {
	render() {
		return (
			<div className="test-component">
				<p>This is where the text will be from blurbs.json</p>

				<h2>Text</h2>
				{/*<p>{blurbs[0].title}</p>*/}

				<h2>Image below is hardcoded.</h2>
				<img className="book-cover" src="../images/little-women.jpg" />


				<h2>Image below is generated from blurbs.json</h2>
			</div>
		)
	}
}

export default TextExcerpt;