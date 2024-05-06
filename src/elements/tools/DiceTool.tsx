import { useState } from 'react';
import './DiceTool.css'

interface Dice {
    name: string,
    expression: string
}

function DelButton({ index, data, setData }: { index: number, data: Array<Dice>, setData: React.Dispatch<React.SetStateAction<Dice[]>> }) {

    function remove(index: number) {
        let d = data;
        d.slice(index, 1);
        setData(d);
    }

    return (
        <button onClick={() => remove(index)} className='del-button'>-</button>
    )
}

export default function DiceTool() {
    const [data, setData] = useState([] as Array<Dice>);
    const [selected, setSelected] = useState(-1);

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
                    selected === index ? <button className='fav-button selected' title={dice.name}><span>{index + 1}</span><DelButton index={index} data={data} setData={setData} /></button> : <button onClick={() => setSelected(index)} className='fav-button' title={dice.name}><span>{index + 1}</span><DelButton index={index} data={data} setData={setData} /></button>
                ))}

                <button className='fav-button add' title='Create new' onClick={() => {
                    let d = data;
                    setSelected(d.push({ name: "New Dice", expression: "" }) - 1);
                    console.log(d);
                    setData(d);
                }}>+</button>
            </div>
            <p>{JSON.stringify(data, null, 4)}</p>
        </>
    );
}