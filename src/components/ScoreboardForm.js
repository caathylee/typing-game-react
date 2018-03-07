import React from 'react';

class Scoreboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			userWpm: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleKeyUp = this.handleKeyUp.bind(this);
	}

	handleSubmit(e) {
		this.setState({
			username: document.getElementById('username').value
		});
		console.log("this is this.state.username " + this.state.username);
		console.log('A name was submitted: ' + this.state.username);
		e.preventDefault();
	}

	handleKeyUp(e) {
		console.log("I'm in keyup function!");

		this.setState({
			username: document.getElementById('username').value
		});
		document.getElementById("username")
			.addEventListener("keyup", function(e){
				e.preventDefault();
				if(e.keyCode == 13) {
					document.getElementById("btn-submit").click();
				}
			});
	}

	render() {
		return (
			<form className="scoreboard-form" method="post" action="/addname">
				<h2>Enter your score to the leadership board!</h2>
				<input id="username" type="text" name="username" placeholder="Enter your name" onKeyUp={this.handleKeyUp}/>
				<br />
				<input id="btn-submit"type="submit" value="Submit" onSubmit={this.handleSubmit}/>
			</form>
		)
	}
}

export default Scoreboard;