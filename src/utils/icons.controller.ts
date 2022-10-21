import { ipcMain, IpcMainEvent } from 'electron';
import * as fs from 'fs';

export function iconsController() {
    fs.readdirSync(`${__dirname}/../assets`)
        .filter((file) => file.endsWith('.svg'))
        .forEach((file) => {
            const uri = `icon-${file.replace('.svg', '')}`;
            console.log(uri);

            ipcMain.on(uri, (event: IpcMainEvent, iconName) => {
                const icon = fs.readFileSync(`${__dirname}/../assets/${iconName}.svg`).toString();
                event.reply(uri, icon);
            });
        });
}
