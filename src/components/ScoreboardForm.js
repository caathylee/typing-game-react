import React from 'react';

class Scoreboard extends React.Component {
	render() {
		return (
			<form className="scoreboard-form">
				<h2>Enter your score to the leadership board!</h2>
				<input type="text" name="username" placeholder="Enter your name"/>
				<br />
				<input type="submit" value="Submit" />
			</form>
		)
	}
}

export default Scoreboard;