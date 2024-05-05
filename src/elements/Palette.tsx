import { getPalette } from "../palettes/palettes";

function StylePalette({ css }: { css: string }) {
    return (
        <style>{css}</style>
    );
}

export default function PaletteSystem({ palette }: { palette: number }) {
    return (
        <StylePalette css={getPalette(palette).css} />
    );
}