import React from 'react';

class SplashPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 10
		}
		this.timer = 0;
		this.startTimer = this.startTimer.bind(this);
		this.countDown = this.countDown.bind(this);
	}

	startTimer() {
		console.log("i've been clicked");
		var buttonElement = document.getElementById('btn-countdown');
		buttonElement.innerHTML ="Game begins in <span id='btn-seconds'>10</span> seconds.";

		if(this.timer == 0) {
			this.timer = setInterval( function() {
				console.log("I'm in countdown function");
				var seconds = this.state.seconds-1;
				console.log("this is seconds " + seconds);
				document.getElementById('btn-seconds').innerHTML = seconds;
				this.setState({
					seconds: seconds
				})
			}, 1000);
		}
	}

	countDown() {
		console.log("I'm in countdown function");
		var seconds = this.state.seconds-1;
		console.log("this is seconds " + seconds);
		document.getElementById('btn-seconds').innerHTML = seconds;
		this.setState({
			seconds: seconds
		})

		 if (seconds == 0) { 
		      clearInterval(this.timer);
		    }
	}

	render() {
		return (
			<div id="splash-page">
				<h1>React Typing <span>Game</span></h1>
				<p>Track your WPM with the typing game</p>
                <button id="btn-countdown" className="btn" onClick={this.startTimer}>Ready to play?</button>
			</div>
		)
	}
}

export default SplashPage;