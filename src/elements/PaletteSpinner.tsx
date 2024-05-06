import { Palettes } from "../palettes/palettes";

export default function PaletteSpinner({ set }: { set: Function }) {
    return (
        <div className="palette-spinner-box">
            <select id="palette-spinner">{
                Palettes.map((palette, index) => (
                    <option value={index}>{palette.label}</option>
                ))
            }</select>
            <button onClick={() => {
                let element: HTMLSelectElement = (document.getElementById("palette-spinner") as HTMLSelectElement)
                window.electronAPI.setSetting("palette", element.value);
                set(element.value);
            }}>&#x2705;</button>
        </div>
    );
}