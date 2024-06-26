import { BrowserWindow, ipcMain, dialog } from 'electron';

import * as utils from './utils'

import { getSettingsManager } from './settings';
import { rollDice } from './roller';

export function setUpIpc() {
    ipcMain.on('window:set_title', (event, title) => {
        const webContents = event.sender;
        const win = BrowserWindow.fromWebContents(webContents);
        if (win === null) return;
        win.setTitle(title);
    });

    ipcMain.handle('dialog:openFile', (event) => {
        const webContents = event.sender;
        const win = BrowserWindow.fromWebContents(webContents);
        if (win === null) return;
        return utils.handleFileOpen(win);
    });


    ipcMain.handle('program:getSettings', (_) => {
        return getSettingsManager().settings;
    });

    ipcMain.on('program:setSetting', (_, name: string, value: any) => {
        getSettingsManager().set(name, value);
    });

    ipcMain.handle('program:getDataFile', (_, path) => {
        return utils.readDataFile(path);
    });

    ipcMain.handle('tools:roll', (_, expression) => {
        return rollDice(expression);
    });
}