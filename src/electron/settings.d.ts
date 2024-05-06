export interface StringKeyed {
    [key: string]: any;
}
export interface Settings extends StringKeyed {
    palette: 0;
}
declare class SettingsManager {
    path: string;
    settings: Settings;
    constructor(path: string);
    load(): void;
    save(): Promise<unknown>;
    set(name: string, value: any): void;
}
export declare function getSettingsManager(): SettingsManager;
export {};
