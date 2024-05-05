const SETTINGS_PATH = "../settings/settings.json";

class Settings {
    constructor(path: string) {

    }
}

const settings = new Settings(SETTINGS_PATH);

export function getSettings() {
    return settings;
}