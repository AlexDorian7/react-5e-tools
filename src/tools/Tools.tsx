import { ReactElement } from "react";
import TestTool from "../elements/tools/TestTool";
import WelcomeTool from "../elements/tools/WelcomeTool";
import React from "react";
import NameGeneratorTool from "../elements/tools/NameGenratorTool";
import DiceTool from "../elements/tools/DiceTool";
import { ErrorBoundary } from "react-error-boundary";

interface SidebarInterface { [key: string]: { [key: string]: string } }

interface ToolsInterface { [key: string]: ReactElement }

const sidebar: SidebarInterface = {
    General: {
        Welcome: "WelcomeTool",
        "Name Generator": "NameGeneratorTool",
        "Dice Roller": "DiceTool"
    },
    Player: {
        TestTool: "TestTool"
    }
}

const ToolsRegistry: ToolsInterface = {
    WelcomeTool: (<WelcomeTool />),
    TestTool: (<TestTool />),
    NameGeneratorTool: (<NameGeneratorTool />),
    DiceTool: (<DiceTool />)
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
            <ErrorBoundary fallback={<div className="main-content">An Error occourred displaying this tool!</div>}>
                <div className="main-content">
                    {ToolsRegistry[selected]}
                </div>
            </ErrorBoundary>
        </>
    )
}