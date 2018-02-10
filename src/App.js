import React, { Component } from 'react';
import TextExcerpt from './components/TextExcerpt';
export class App extends Component {
    render() {
        return (
            <div className="app" style={{textAlign: 'center'}}>
                <h1>Hello <span>World</span></h1>
                <p>This React template is set up with Yarn, Babel, Webpack, and SASS.</p>

                <TextExcerpt />
            </div>
        );
    }
}
export default App;