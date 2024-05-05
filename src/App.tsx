import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

import PaletteSystem from './elements/Palette';
import PaletteSpinner from './elements/PaletteSpinner';

function App() {
    const [palette, setPalette] = useState(0);
    return (
        <>
            <PaletteSystem palette={palette} />
            <PaletteSpinner set={setPalette} />
            <div className="App">
                <header className="App-header">
                    <img src={logo as unknown as string} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        </>
    );
}

export default App;
