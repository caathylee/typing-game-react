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

		console.log(this.props)
	}

	startTimer() {
		document.getElementById('btn-countdown').innerHTML ="Game begins in <span id='btn-seconds'>10</span> seconds.";
		if(this.timer == 0) {
			this.timer = setInterval(this.countDown, 1000);
		}
	}

	countDown() {
		var seconds = this.state.seconds-1;
		document.getElementById('btn-seconds').innerHTML = seconds;
		this.setState({
			seconds: seconds
		})

	 	if (seconds == 0) { 
	      clearInterval(this.timer);
	      console.log("this is hideSplashPage " + this.props.splashPageIsHidden);

	      //set hideSplashPage to true
	      this.props.hideSplashPage();
	    }
	}

	render() {
		console.log("This is in SplashPage.js: " + this.props.splashPageIsHidden)
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