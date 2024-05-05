import { Palettes } from "../palettes/palettes";

export default function PaletteSpinner({ set }) {
    return (
        <div className="palette-spinner-box">
            <select id="palette-spinner">{
                Palettes.map((palette, index) => (
                    <option value={index}>{palette.label}</option>
                ))
            }</select>
            <button onClick={() => {
                let val = document.getElementById("palette-spinner").value
                set(val);
            }}>&#x2705;</button>
        </div>
    );
}