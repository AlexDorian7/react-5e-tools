declare namespace electronAPI {
    const openFile: () => Promise<string>;
    const getSettings: () => Promise<Object<any>>;
    const setSetting: (name: string, value: any) => {};
    const getDataFile: (path: string) => Promise<Settings>;
    const roll: (expresion: string) => Promise<Array<number>>;
}