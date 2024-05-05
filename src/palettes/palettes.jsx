"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPalette = exports.Palettes = void 0;
exports.Palettes = [];
function getPalette(index) {
    const pal = exports.Palettes[index];
    return pal === undefined ? exports.Palettes[0] : pal;
}
exports.getPalette = getPalette;
class Palette {
    constructor(name, label, css) {
        this.css = css;
        this.name = name;
        this.label = label;
        exports.Palettes.push(this);
    }
}
exports.default = Palette;
new Palette("DEFAULT", "Default", `:root {
        --color-red: #FF0000;
        --color-orange: #FF7F00;
        --color-yellow: #FFFF00;
        --color-lime: #7FFF00;
        --color-green: #00FF00;
        --color-blgrn: #00FF7F;
        --color-aqua: #00FFFF;
        --color-blue: #007FFF;
        --color-indigo: #0000FF;
        --color-violet: #7F00FF;
        --color-magenta: #FF00FF;
        --color-pink: #FF007F;
        --color-black: #000000;
        --color-dark: #3F3F3F;
        --color-grey: #7F7F7F;
        --color-light: #BFBFBF;
        --color-white: #FFFFFF;
        --color-primary: #BF7FFF;
        --color-secondary: #7F7FFF;
        --color-success: #3FBF3F;
        --color-danger: #BF3F3F;
    }`);
new Palette("INVERTED", "Inverted", `:root {
        --color-red: #00FFFF;
        --color-orange: #007FFF;
        --color-yellow: #0000FF;
        --color-lime: #7F00FF;
        --color-green: #FF00FF;
        --color-blgrn: #FF007F;
        --color-aqua: #FF0000;
        --color-blue: #FF7F00;
        --color-indigo: #FFFF00;
        --color-violet: #7FFF00;
        --color-magenta: #00FF00;
        --color-pink: #00FF7F;
        --color-black: #FFFFFF;
        --color-dark: #BFBFBF;
        --color-grey: #7F7F7F;
        --color-light: #3F3F3F;
        --color-white: #000000;
        --color-primary: #3F7F00;
        --color-secondary: #7F7F00;
        --color-success: #BF3FBF;
        --color-danger: #3FBFBF;
    }`);
