declare namespace electronAPI {
    const openFile: () => Promise<string>;
    const getSettings: () => Promise<Object<any>>;
    const setSetting: (name: string, value: any) => {};

}