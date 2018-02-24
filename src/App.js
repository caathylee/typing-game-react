import React, { Component } from 'react';
import TextExcerpt from './components/TextExcerpt';
import SplashPage from './components/SplashPage';

export class App extends Component {
	constructor(props) {
		super(props)
		this.splashPageIsHidden = false;
		this.hideSplashPage = this.hideSplashPage.bind(this);
	}

	hideSplashPage() {
		this.splashPageIsHidden = true;
		console.log(" in hideSplashPage function in App.js " + this.splashPageIsHidden);
		this.setState({});
	}

    render() {
    	console.log("this is it in App.js: " + this.splashPageIsHidden);
        return (
            <div className="app">
            	{!this.splashPageIsHidden ? <SplashPage splashPageIsHidden={this.splashPageIsHidden} hideSplashPage={this.hideSplashPage.bind(this)}/> : null }
            	{this.splashPageIsHidden ? <TextExcerpt splashPageIsHidden={this.splashPageIsHidden} /> : null }
            </div>
        );
    }
}
export default App;