import { getPalette } from "../palettes/palettes";

function StylePalette({ css }) {
    return (
        <style>{css}</style>
    );
}

export default function PaletteSystem({ palette }) {
    return (
        <StylePalette css={getPalette(palette).css} />
    );
}