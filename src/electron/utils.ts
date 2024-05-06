import { dialog } from 'electron';

import * as fs from 'node:fs'
import * as path from 'node:path'

export async function handleFileOpen(window: Electron.BrowserWindow) {
    const { canceled, filePaths } = await dialog.showOpenDialog(window)
    if (!canceled) {
        const path: string = filePaths[0];
        return fs.readFileSync(path, 'utf8');
    }
}