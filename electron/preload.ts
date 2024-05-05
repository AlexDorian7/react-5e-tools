import { contextBridge, ipcRenderer } from 'electron/renderer'
import { Settings } from './settings'

contextBridge.exposeInMainWorld('electronAPI', {
    openFile: () => ipcRenderer.invoke('dialog:openFile') as Promise<string>,
    getSettings: () => ipcRenderer.invoke('program:getSettings') as Promise<Settings>
});