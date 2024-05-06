import { ReactElement } from "react";
import TestTool from "../elements/tools/TestTool";
import WelcomeTool from "../elements/tools/WelcomeTool";

interface SidebarInterface { [key: string]: { [key: string]: string } }

interface ToolsInterface { [key: string]: ReactElement }

const sidebar: SidebarInterface = {
    General: {
        Welcome: "WelcomeTool"
    },
    Player: {
        TestTool: "TestTool"
    }
}

const ToolsRegistry: ToolsInterface = {
    WelcomeTool: (<WelcomeTool />),
    TestTool: (<TestTool />)
}

export default function Tools({ selected, set }: { selected: string, set: Function }) {
    return (
        <>
            <div className="side-bar">
                <ul className="sidebar-list">
                    {Object.keys(sidebar).map((key) => (
                        <>
                            <li><b>{key}</b></li>
                            <ul className="sidebar-list">
                                {Object.keys(sidebar[key]).map((label) => (
                                    sidebar[key][label] === selected ? (<li><button className="link selected">{label}</button></li>) : (<li><button className="link" onClick={() => { set(sidebar[key][label]) }}>{label}</button></li>)
                                ))}
                            </ul>
                        </>
                    ))}
                </ul>
            </div>
            {ToolsRegistry[selected]}
        </>
    )
}