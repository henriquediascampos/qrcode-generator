import { app, BrowserWindow } from 'electron';
import { Home } from '../views/home/Home';
import { SplashScreen } from '../views/loading/SplashScreen';
import { CreateMenu } from './Menu';
import { Window } from './Window';

export class Routing {
    homeWindow: Window;
    splashWindow: BrowserWindow;

    async init() {
        SplashScreen()
            .then((splash) => {
                this.splashWindow = splash;
                CreateMenu();
                this.homeWindow = new Home();
            })
            .then(() => {
                setTimeout(() => {
                    this.homeWindow.show();
                    this.splashWindow.hide();
                    this.splashWindow.close();
                }, 3100);
            });

        app.on('activate', function () {
            if (BrowserWindow.getAllWindows().length === 0) {
                this.splashWindow = SplashScreen();
            }
        });
    }
}
