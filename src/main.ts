import { app } from 'electron';
import { Routing } from './core/Routing';
import { iconsController } from './utils/icons.controller';
app.whenReady().then(() => {
    const routing = new Routing();
    routing.init();
    iconsController();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
