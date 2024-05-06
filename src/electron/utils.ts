import { dialog } from 'electron';

import * as fs from 'node:fs'
import * as path from 'node:path'

export async function handleFileOpen(window: Electron.BrowserWindow): Promise<string | null> {
    const { canceled, filePaths } = await dialog.showOpenDialog(window)
    if (!canceled) {
        const path: string = filePaths[0];
        return fs.readFileSync(path, 'utf8');
    }
    return null;
}

export async function readDataFile(pth: string): Promise<string | null> {
    try {
        return fs.readFileSync(path.join(__dirname, "../../data/", pth), 'utf8');
    }
    catch {
        return null;
    }
}