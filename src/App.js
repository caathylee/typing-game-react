import React, { Component } from 'react';
import TextExcerpt from './components/TextExcerpt';
import SplashPage from './components/SplashPage';

export class App extends Component {
	constructor(props) {
		super(props)
		this.textIsHidden = true;
		this.showTextExcerpt = this.showTextExcerpt.bind(this);
	}

	showTextExcerpt() {
		this.textIsHidden = false;
		this.setState({});
	}

    render() {
        return (
            <div className="app">
            	<SplashPage showTextExcerpt={this.showTextExcerpt.bind(this)} />
            	{!this.textIsHidden ? <TextExcerpt textIsHidden={this.textIsHidden} showTextExcerpt={this.showTextExcerpt.bind(this)}/> : null }
            </div>
        );
    }
}
export default App;