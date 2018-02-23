import React, { Component } from 'react';
import TextExcerpt from './components/TextExcerpt';
import SplashPage from './components/SplashPage';

export class App extends Component {
    render() {
        return (
            <div className="app" style={{textAlign: 'center'}}>
                <SplashPage />
            </div>
        );
    }
}
export default App;