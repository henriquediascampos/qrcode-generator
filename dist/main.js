"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require("path");
// import generatorImageQrcod from './qrcodePng.js';
function createWindow() {
    var mainWindow = new electron_1.BrowserWindow({
        height: 600,
        width: 800,
        webPreferences: {
        // preload: path.join(__dirname, 'preload.js'),
        }
    });
    mainWindow.loadFile(path.join(__dirname, '../index.html'));
    mainWindow.webContents.openDevTools();
}
electron_1.app.whenReady().then(function () {
    createWindow();
    electron_1.app.on('activate', function () {
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
electron_1.app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        electron_1.app.quit();
    }
});
// generatorImageQrcod(...[5591, 3342]);
//# sourceMappingURL=main.js.map