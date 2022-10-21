import { BrowserWindow } from 'electron';

export abstract class Window {
    window: BrowserWindow;
    ready = false;

    constructor(window: BrowserWindow) {
        this.window = window;
        this.window.once('ready-to-show', () => {
            this.ready = true;
        });
    }

    show(): void {
        if (this.ready) {
            this.window.show();
        } else {
            this.window.once('ready-to-show', () => {
                this.ready = true;
                this.window.show();
            });
        }
    }

    hide(): void {
        this.window.hide();
    }

    close(): void {
        this.window.close();
    }
}
