import React from "react";
import { useState } from 'react';

interface StringKeyed { [key: string]: any };
// interface StringKeyedStringValued extends StringKeyed { [key: string]: string };

interface StringKeyedArray extends StringKeyed { [key: string]: Array<string> };

interface DataInterface extends StringKeyed { [key: string]: StringKeyedArray };

const data: DataInterface = {
    "Dwarf": {
        "Male": ["Adrik", "Alberich", "Baern", "Barendd", "Brottor", "Bruenor", "Dain", "Darrak", "Delg", "Eberk", "Einkil", "Fargrim", "Flint", "Gardain", "Harbek", "Kildrak", "Morgran", "Orsik", "Oskar", "Rangrim", "Rurik", "Taklinn", "Thoradin", "Thorin", "Tordek", "Traubon", "Travok", "Ulfgar", "Veit", "Vondal"],
        "Female": ["Amber", "Artin", "Audhild", "Bardryn", "Dagnal", "Diesa", "Eldeth", "Falkrunn", "Finellen", "Gunnloda", "Gurdis", "Helja", "Hlin", "Kathra", "Kristryd", "Ilde", "Liftrasa", "Mardred", "Riswynn", "Sannl", "Torbera", "Torgga", "Vistra"],
        "Clan": ["Balderk", "Battlehammer", "Brawnanvil", "Dankil", "Fireforge", "Frostbeard", "Gorunn", "Holderhek", "Ironfist", "Loderr", "Lutgehr", "Rumnaheim", "Strakeln", "Torunn", "Ungart"],
    },
    "Elf": {
        "Child": ["Ara", "Bryn", "Del", "Eryn", "Faen", "Innil. Lael", "Mella", "Naill", "Naeris", "Phann", "Rael", "Rinn", "Sai", "Syllin", "Thia", "Vall"],
        "Male": ["Adran", "Aelar", "Aramil", "Arannis", "Aust", "Beiro", "Berrian", "Carric ", "Enialis", "Erdan", "Erevan", "Galinndan", "Hadarai", "Heian", "Himo", "Immeral", "Ivellios", "Laucian", "Mindartis", "Paelias", "Peren", "Quarion", "Riardon", "Rolen", "Soveliss", "Thamior", "Tharivol", "Theren", "Varis"],
        "Female": ["Adrie", "Althaea", "Anastrianna", "Andraste", "Antinua", "Bethrynna", "Birel", "Caelynn", "Drusilia", "Enna", "Felosial", "Ielenia", "Jelenneth", "Keyleth", "Leshanna", "Lia", "Meriele", "M ialee", "Naivara", "Quelenna", "Quillathe", "Sariel", "Shanairra", "Shava", "Silaqui", "Theirastra", "Thia", "Vadania", "Valanthe", "Xanaphia"],
        "Family": ["Amakiir (Gemflower)", "Amastacia (Starflower)", "Galanodel (Moonwhisper)", "Holimion (Diamonddew)", "Ilphelkiir (Gemblossom)", "Liadon (Silverfrond)", "Meliamne (Oakenheel)", "Nai'lo (Nightbreeze)", "Siannodel (Moonbrook)", "Xiloscient (Goldpetal)"],
    },
    "Halfling": {
        "Male": ["Alton", "Ander", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle", "Merric", "Milo", "Osborn", "Perrin", "Reed", "Roscoe", "Wellby"],
        "Female": ["Andry", "Bree", "Callie", "Cora", "Euphemia", "Jillian", "Kithri", "Lavinia", "Lidda", "Merla", "Nedda", "Paela", "Portia", "Seraphina", "Shaena", "Trym", "Vani", "Verna"],
        "Family": ["Brushgather", "Goodbarrel", "Greenbottle", "High-hill", "Hilltopple", "Leagallow", "Tealeaf", "Thorngage", "Tosscobble", "Underbough"],
    },
    "Human": {
        "Calishite (Male)": ["Aseir", "Bardeid", "Haseid", "Khemed", "Mehmen", "Sudeiman", "Zasheir"],
        "Calishite (Female)": ["Atala", "Ceidil", "Hama", "Jasmal", "Meilil", "Seipora", "Yasheira", "Zasheida"],
        "Calishite (Surname)": ["Basha", "Dumein", "Jassan", "Khalid", "Mostana", "Pashar", "Rein"],
        "Chondathan (Male)": ["Darvin", "Dorn", "Evendur", "Gorstag", "Grim", "Helm", "Malark", "Morn", "Randal", "Stedd"],
        "Chondathan (Female)": ["Arveene", "Esvele", "Jhessail", "Kerri", "Lureene", "Miri", "Rowan", "Shandri", "Tessele"],
        "Chondathan (Surname)": ["Amblecrown", "Buckman", "Dundragon", "Evenwood", "Greycastle", "Tallstag"],
        "Damaran (Male)": ["Bor", "Fodel", "Glar", "Grigor", "Igan", "Ivor", "Kosef", "Mival", "Orel", "Pavel", "Sergor"],
        "Damaran (Female)": ["Alethra", "Kara", "Katernin", "Mara", "Natali", "Olma", "Tana", "Zora"],
        "Damaran (Surname)": ["Bersk", "Chernin", "Dotsk", "Kulenov", "Marsk", "Nemetsk", "Shemov", "Starag"],
        "Illuskan (Male)": ["Ander", "Blath", "Bran", "Frath", "Geth", "Lander", "Luth", "Malcer", "Stor", "Taman", "Urth"],
        "Illuskan (Female)": ["Amafrey", "Betha", "Cefrey", "Kethra", "Mara", "Olga", "Silifrey", "Westra"],
        "Illuskan (Surname)": ["Brightwood", "Helder", "Hornraven", "Lackman", "Stormwind", "Windrivver"],
        "Mulan (Male)": ["Aoth", "Bareris", "Ehput-Ki", "Kethoth", "Mumed", "Ramas", "So-Kehur", "Thazar-De", "Urhur"],
        "Mulan (Female)": ["Arizima", "Chathi", "Nephis", "Nulara", "Murithi", "Sefris", "Thola", "Umara", "Zolis"],
        "Mulan (Surname)": ["Ankhalab", "Anskuld", "Fezim", "Hahpet", "Nathandem", "Sepret", "Uuthrakt"],
        "Rashemi (Male)": ["W.I.P."],
        "Rashemi (Female)": ["W.I.P."],
        "Rashemi (Surname)": ["W.I.P."],
        "Shou (Male)": ["W.I.P."],
        "Shou (Female)": ["W.I.P."],
        "Shou (Surname)": ["W.I.P."],
        "Tethyrian (Male)": ["W.I.P."],
        "Tethyrian (Female)": ["W.I.P."],
        "Tethyrian (Surname)": ["W.I.P."],
        "Turami (Male)": ["W.I.P."],
        "Turami (Female)": ["W.I.P."],
        "Turami (Surname)": ["W.I.P."],
    },
    "Dragonborn": {
        "Male": ["W.I.P."],
        "Female": ["W.I.P."],
        "Childhood": ["W.I.P."],
        "Clan": ["W.I.P."],
    },
    "Gnome": {
        "Male": ["W.I.P."],
        "Female": ["W.I.P."],
        "Clan": ["W.I.P."],
        "Nicknames": ["W.I.P."],
    },
    "Half-Orc": {
        "Male": ["W.I.P."],
        "Female": ["W.I.P."],
    },
    "Tiefling": {
        "Male": ["W.I.P."],
        "Female": ["W.I.P."],
        "Virtue": ["W.I.P."],
    },

}

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
            <br /><br />
            <label htmlFor="generated-name">Generated name: </label>
            <input type="text" name="generated-name" value={name}></input>
        </>
    );
}