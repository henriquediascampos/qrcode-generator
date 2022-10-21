import { BrowserWindow } from 'electron';
import * as path from 'path';

export async function SplashScreen(): Promise<BrowserWindow> {
    const window = new BrowserWindow({
        width: 200,
        height: 200,
        transparent: true,
        frame: false,
        alwaysOnTop: true,
    });

    window.loadFile(path.join(__dirname, './presenter/splashScreen.html'));
    return window;
}
