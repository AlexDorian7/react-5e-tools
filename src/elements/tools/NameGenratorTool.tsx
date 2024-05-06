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
        "Rashemi (Male)": ["Borivik", "Faurgar", "Jandar", "Kanithar", "Madislak", "Ralmevik", "Shaumar", "Vladislak"],
        "Rashemi (Female)": ["Fyevarra", "Hulmarra", "Immith", "Imzel", "Navarra", "Shevarra", "Tammith. Yuldra"],
        "Rashemi (Surname)": ["Chergoba", "Dyernina", "Iltazyara", "Murnyethara", "Stayanoga", "Ulmokina"],
        "Shou (Male)": ["An", "Chen", "Chi", "Fai", "Jiang", "Jun", "Lian", "Long", "Meng", "On", "Shan", "Shui", "Wen"],
        "Shou (Female)": ["Bai", "Chao", "Jia", "Lei", "Mei", "Qiao", "Shui", "Tai"],
        "Shou (Surname)": ["Chien", "Huang", "Kao", "Kung", "Lao", "Ling", "Mei", "Pin", "Shin", "Sum", "Tan", "Wan"],
        "Tethyrian (Male)": ["Darvin", "Dorn", "Evendur", "Gorstag", "Grim", "Helm", "Malark", "Morn", "Randal", "Stedd"],
        "Tethyrian (Female)": ["Arveene", "Esvele", "Jhessail", "Kerri", "Lureene", "Miri", "Rowan", "Shandri", "Tessele"],
        "Tethyrian (Surname)": ["Amblecrown", "Buckman", "Dundragon", "Evenwood", "Greycastle", "Tallstag"],
        "Turami (Male)": ["Anton", "Diero", "Marcon", "Pieron", "Rimardo", "Rom ero", "Salazar", "Umbero"],
        "Turami (Female)": ["Balama", "Dona", "Faila", "Jalana", "Luisa", "Marta", "Quara", "Selise", "Vonda"],
        "Turami (Surname)": ["Agosto", "Astorio", "Calabra", "Domine", "Falone", "Marivaldi", "Pisacar", "Ramondo"],
    },
    "Dragonborn": {
        "Male": ["Arjhan", "Balasar", "Bharash", "Donaar", "Ghesh", "Heskan", "Kriv", "Medrash", "Mehen", "Nadarr", "Pandjed", "Patrin", "Rhogar", "Shamash", "Shedinn", "Tarhun", "Torinn"],
        "Female": ["Akra", "Biri", "Daar", "Farideh", "Harann", "Flavilar", "Jheri", "Kava", "Korinn", "Mishann", "Nala", "Perra", "Raiann", "Sora", "Surina", "Thava", "Uadjit"],
        "Childhood": ["Climber", "Earbender", "Leaper", "Pious", "Shieldbiter", "Zealous"],
        "Clan": ["Clethtinthiallor", "Daardendrian", "Delmirev", "Drachedandion", "Fenkenkabradon", "Kepeshkm olik", "Kerrhylon", "Kimbatuul", "Linxakasendalor", "Myastan", "Nemmonis", "Norixius", "Ophinshtalajiir", "Prexijandilin", "Shestendeliath", "Turnuroth", "Verthisathurgiesh", "Yarjerit"],
    },
    "Gnome": {
        "Male": ["Alston", "Alvyn", "Boddynock", "Brocc", "Burgell", "Dimble", "Eldon", "Erky", "Fonkin", "Frug", "Gerbo", "Gimble", "Glim", "Jebeddo", "Kellen", "Namfoodle", "Orryn", "Roondar", "Seebo", "Sindri", "Warryn", "Wrenn", "Zook"],
        "Female": ["Bimpnottin", "Breena", "Caramip", "Carlin", "Donella", "Duvamil", "Ella", "Ellyjobell", "Ellywick", "Lilli", "Loopmottin", "Lorilla", "Mardnab", "Nissa", "Nyx", "Oda", "Orla", "Roywyn", "Shamil", "Tana", "Waywocket", "Zanna"],
        "Clan": ["Beren", "Daergel", "Folkor", "Garrick", "Nackle", "Murnig", "Ningel", "Raulnor", "Scheppen", "Tim bers", "Turen"],
        "Nicknames": ["Aleslosh", "Ashhearth", "Badger", "Cloak", "Doublelock", "Filchbatter", "Fnipper", "Ku", "Nim", "Oneshoe", "Pock", "Sparklegem", "Stumbleduck"],
    },
    "Half-Orc": {
        "Male": ["Dench", "Feng", "Gell", "Henk", "Holg", "Imsh", "Keth", "Krusk", "Mhurren", "Ront", "Shump", "Thokk"],
        "Female": ["Baggi", "Emen", "Engong", "Kansif", "Myev", "Neega", "Ovak", "Ownka", "Shautha", "Sutha", "Vola", "Volen", "Yevelda"],
    },
    "Tiefling": {
        "Male": ["Akmenos", "Amnon", "Barakas", "Damakos", "Ekemon", "Iados", "Kairon", "Leucis", "Melech", "Mordai", "Morthos", "Pelaios", "Skamos", "Therai"],
        "Female": ["Akta", "Anakis", "Bryseis", "Criella", "Damaia", "Ea", "Kallista", "Lerissa", "Makaria", "Nemeia", "Orianna", "Phelaia", "Rieta"],
        "Virtue": ["Art", "Carrion", "Chant", "Creed", "Despair", "Excellence", "Fear", "Glory", "Hope", "Ideal", "Music", "Nowhere", "Open", "Poetry", "Quest", "Random", "Reverence", "Sorrow", "Temerity", "Torment", "Weary"],
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
            <p style={{ fontSize: "1.5rem" }}>
                Generated Name: <input type="text" value={name} />
                <br />
                Dwarvish Script: <code style={{ "fontFamily": "dwarvish" }}>{name}</code>
                <br />
                Elvish Script: <code style={{ "fontFamily": "elvish" }}>{name}</code>
                <br />
                Draconic Script: <code style={{ "fontFamily": "draconic" }}>{name}</code>
            </p>
        </>
    );
}