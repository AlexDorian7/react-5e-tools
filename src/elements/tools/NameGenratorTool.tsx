import React from "react";
import { useState } from 'react';

interface StringKeyed { [key: string]: any };
// interface StringKeyedStringValued extends StringKeyed { [key: string]: string };

interface StringKeyedArray extends StringKeyed { [key: string]: Array<string> };

interface DataInterface extends StringKeyed { [key: string]: StringKeyedArray };

let data: DataInterface = { "Loading": { "Loading": ["Loading"] } };

electronAPI.getDataFile("name_generator/names.json").then((d) => {
    data = JSON.parse(d) as DataInterface;
});

export default function NameGeneratorTool() {

    const [key, setKey] = useState("Dragonborn");
    const [name, setName] = useState("");

    function changeRace() {
        const element: HTMLSelectElement = document.getElementById("name-generator-tool-race-select") as HTMLSelectElement;
        setKey(element.value);
    }

    function generate() {
        const race: string = (document.getElementById("name-generator-tool-race-select") as HTMLSelectElement).value;
        const set: string = (document.getElementById("name-generator-tool-set-select") as HTMLSelectElement).value;
        const index = Math.floor(Math.random() * data[race][set].length);
        setName(data[race][set][index]);
    }

    return (
        <>
            <h1>Name Generator:</h1>
            <hr />
            <label htmlFor="race">Race: </label>
            <select id="name-generator-tool-race-select" name="race" onChange={changeRace}>
                {Object.keys(data).map((name) => (
                    <option value={name}>{name}</option>
                ))}
            </select>
            <br />
            <label htmlFor="set">Name set: </label>
            <select id="name-generator-tool-set-select" name="set">
                {Object.keys(data[key]).map((name) => (
                    <option value={name}>{name}</option>
                ))}
            </select>
            <br />
            <button onClick={generate}>Generate</button>
            <table style={{ fontSize: "1.5rem" }}>
                <tr><td>Generated Name:</td><td><input type="text" value={name} /></td></tr>
                <tr><td>Dwarvish Script:</td><td><code style={{ "fontFamily": "dwarvish" }}>{name}</code></td></tr>
                <tr><td>Elvish Script:</td><td><code style={{ "fontFamily": "elvish" }}>{name}</code></td></tr >
                <tr><td>Draconic Script:</td><td><code style={{ "fontFamily": "draconic" }}>{name}</code></td></tr >
            </table>
        </>
    );
}