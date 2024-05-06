export declare const Palettes: Array<Palette>;
export declare function getPalette(index: number): Palette;
export default class Palette {
    css: string;
    name: string;
    label: string;
    constructor(name: string, label: string, css: string);
}
