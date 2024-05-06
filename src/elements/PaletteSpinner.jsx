"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const palettes_1 = require("../palettes/palettes");
function PaletteSpinner({ set }) {
    return (<div className="palette-spinner-box">
            <select id="palette-spinner">{palettes_1.Palettes.map((palette, index) => (<option value={index}>{palette.label}</option>))}</select>
            <button onClick={() => {
            let element = document.getElementById("palette-spinner");
            window.electronAPI.setSetting("palette", element.value);
            set(element.value);
        }}>&#x2705;</button>
        </div>);
}
exports.default = PaletteSpinner;
