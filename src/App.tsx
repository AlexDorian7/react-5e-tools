import { useState } from 'react';

import './styles/App.css';
import './styles/default.css';

import PaletteSystem from './elements/Palette';
import PaletteSpinner from './elements/PaletteSpinner';
import Tools from './tools/Tools';

function App() {
    const [palette, setPalette] = useState(0);
    const [tool, setTool] = useState("WelcomeTool")
    window.electronAPI.getSettings().then((settings) => {
        setPalette(settings.palette);
    });
    return (
        <>
            <PaletteSystem palette={palette} />
            <PaletteSpinner set={setPalette} />
            <div className="App">
                <Tools selected={tool} set={setTool} />
            </div>
        </>
    );
}

export default App;
