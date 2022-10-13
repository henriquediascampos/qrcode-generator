import { app, BrowserWindow } from 'electron';
import * as path from 'path';
// import generatorImageQrcod from './qrcodePng.js';

function createWindow() {
    const mainWindow = new BrowserWindow({
        height: 400,
        width: 500,
        webPreferences: {
            // preload: path.join(__dirname, 'preload.js'),
        },
    });

    // const mainWindow2 = new BrowserWindow({
    //     height: 300,
    //     width: 1000,
    //     webPreferences: {
    //         // preload: path.join(__dirname, 'preload.js'),
    //     },
    // });

    mainWindow.loadFile(path.join(__dirname, '../index.html'));
    // mainWindow2.loadFile(path.join(__dirname, '../index.html'));

    // mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

// generatorImageQrcod(...[5591, 3342]);
