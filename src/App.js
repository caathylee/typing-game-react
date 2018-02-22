import React, { Component } from 'react';
import TextExcerpt from './components/TextExcerpt';

export class App extends Component {
    render() {
        return (
            <div className="app" style={{textAlign: 'center'}}>
                <h1>Typing <span>Game</span></h1>
                <TextExcerpt />
            </div>
        );
    }
}
export default App;