import React from 'react';
import TextExcerpt from './TextExcerpt';

class SplashPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			seconds: 10,
			btnIsHidden: false
		}
		this.timer = 0;
		this.startTimer = this.startTimer.bind(this);
		this.countDown = this.countDown.bind(this);
	}

	startTimer() {
		this.props.showTextExcerpt();
		document.getElementById('btn-countdown').innerHTML ="Game begins in <span id='btn-seconds'>10</span>";
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
	      this.setState({
			btnIsHidden: true
	      });
	    }
	}

	render() {
		return (
			<div id="splash-page">
				<h1>React Typing <span>Game</span></h1>
				<p>Track your WPM with the typing game</p>
				{!this.state.btnIsHidden ? <button id="btn-countdown" className="btn" onClick={this.startTimer}>Ready to play?</button> : null}
                
			</div>
		)
	}
}

export default SplashPage;