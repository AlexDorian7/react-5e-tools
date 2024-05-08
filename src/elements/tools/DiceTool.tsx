import { useState } from 'react';
import './DiceTool.css'

interface Dice {
    name: string,
    expression: string
}

function DelButton({ index, data, setData, setSelected }: { index: number, data: Array<Dice>, setData: React.Dispatch<React.SetStateAction<Dice[]>>, setSelected: React.Dispatch<React.SetStateAction<number>> }) {

    function remove(index: number) {
        let d = data;
        d.splice(index, 1);
        setData(d);
        setSelected(-1);
    }

    return (
        <button onClick={() => remove(index)} className='del-button'>-</button>
    )
}

function EditDice({ selected, data, setData, setSelected, setDirty }: { selected: number, data: Array<Dice>, setData: React.Dispatch<React.SetStateAction<Dice[]>>, setSelected: React.Dispatch<React.SetStateAction<number>>, setDirty: React.Dispatch<React.SetStateAction<boolean>> }) {

    if (selected >= 0 && selected < data.length) {
        return (
            <p>
                Name: <input type="text" defaultValue={data[selected].name} onChange={(event) => { data[selected].name = (event.nativeEvent.target as HTMLInputElement).value; setDirty(true); }} />
                <br />
                Expression: <input type="text" defaultValue={data[selected].expression} onChange={(event) => { data[selected].expression = (event.nativeEvent.target as HTMLInputElement).value; setDirty(true); }} />
                <br />
                <i>Expression grammar can be found <a href="/dicehelp.html" target='_blank'>here</a>.</i>
            </p>
        );
    }
    return (
        <p>Please select a dice roll above.</p>
    );
}

export default function DiceTool() {
    const [data, setData] = useState([] as Array<Dice>);
    const [selected, setSelected] = useState(-1);
    const [dirty, setDirty] = useState(false);

    if (dirty) {
        setDirty(false);
    }

    return (
        <>
            <h1>Dice Roller</h1>
            <hr />
            <button onClick={() => {
                window.electronAPI.openFile().then((d) => {
                    setData(JSON.parse(d));
                });
            }}>Load</button>
            <button>Save</button>
            <div className='favorites'>
                <p className='fav-label'>Here you can create and edit your favorited dice rolls.</p>
                {data.map((dice, index) => (
                    selected === index ? <button className='fav-button selected' title={dice.name}><span>{dice.name}</span><DelButton index={index} data={data} setData={setData} setSelected={setSelected} /></button> : <button onClick={() => setSelected(index)} className='fav-button' title={dice.name}><span>{dice.name}</span><DelButton index={index} data={data} setData={setData} setSelected={setSelected} /></button>
                ))}

                <button className='fav-button add' title='Create new' onClick={() => {
                    let d = data;
                    setSelected(d.push({ name: "New Dice Roll", expression: "" }) - 1);
                    setData(d);
                    setDirty(true);
                }}>+</button>
            </div>
            <EditDice selected={selected} data={data} setData={setData} setSelected={setSelected} setDirty={setDirty} />
            <p>{JSON.stringify(data, null, 4)}</p>
        </>
    );
}