"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const palettes_1 = require("../palettes/palettes");
function StylePalette({ css }) {
    return (<style>{css}</style>);
}
function PaletteSystem({ palette }) {
    return (<StylePalette css={(0, palettes_1.getPalette)(palette).css}/>);
}
exports.default = PaletteSystem;
