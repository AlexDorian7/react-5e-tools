const SETTINGS_PATH = "../../settings/settings.json";

import * as fs from 'node:fs'
import * as path from 'node:path'

export interface StringKeyed {
    [key: string]: any
}

export interface Settings extends StringKeyed {
    palette: 0
}

function defaultSettings(): Settings {
    return {
        palette: 0,

    } as Settings;
}

function addNewDefaults(old: Settings): Settings {
    for (const prop in defaultSettings()) {
        if (Object.prototype.hasOwnProperty.call(defaultSettings(), prop)) {
            const element = defaultSettings()[prop];
            old[prop] = old[prop] === undefined ? element : old[prop];
        }
    }

    return old;
}

class SettingsManager {
    path: string;
    settings: Settings = defaultSettings();

    constructor(path: string) {
        console.log(path);
        this.path = path;
        try {
            this.load(); // Try to load settings from the file
            this.save();
        } catch {
            this.save(); // Create the settings file if it does not exist yet
        }
    }

    load() {
        if (fs.existsSync(this.path)) {
            const data = fs.readFileSync(this.path, 'utf8');
            this.settings = addNewDefaults(JSON.parse(data) as Settings);
        } else {
            throw "Settings file not found";
        }
    }

    save() {
        const data = JSON.stringify(this.settings, null, 4);
        return new Promise((reslove, reject) => {
            fs.writeFile(this.path, data, () => { reslove(true); });
        });
    }

    set(name: string, value: any) {
        this.settings[name] = value
        this.save();
    }
}

const settingsManager = new SettingsManager(path.join(__dirname, SETTINGS_PATH));

export function getSettingsManager() {
    return settingsManager;
}