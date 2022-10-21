import { BrowserWindow, ipcMain, IpcMainEvent } from 'electron';
import * as path from 'path';
import * as fs from 'fs';
import { Window } from '../../core/Window';

export class Home extends Window {
    constructor() {
        super(
            new BrowserWindow({
                height: 800,
                width: 600,
                x: 0,
                y: 0,
                show: false,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false,
                    preload: path.join(__dirname, '../../components/scripts.preloader.js'),
                },
            })
        );

        this.window.loadFile(path.join(__dirname, './presenter/home.html'));
        this.window.webContents.openDevTools({
            mode: 'undocked',
        });
    }
}

ipcMain.on('send-files', (event: IpcMainEvent, paths: string[]) => {
    const content = paths
        .map((p) => fs.readFileSync(p).toString())
        .join('\n')
        .split('\n')
        .filter((row) => row.trim().length !== 0);
    event.reply('send-files', content);
});
