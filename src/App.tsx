import React from 'react';
import './App.scss';
import { Header, Home } from './containers/index';

function App() {
    return (
        <div className="App">
            <Header />
            <main className="main">
                <Home />
            </main>
        </div>
    );
}

export default App;
