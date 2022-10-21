import { Menu } from 'electron';

export const CreateMenu = () => {
    Menu.buildFromTemplate([
        {
            label: 'arquivo',
            submenu: [
                {
                    label: 'Abrir repositorio',
                    click() {
                        console.log('open repository');
                    },
                },
                {
                    label: 'Abrir repositorio',
                    role: process.platform === 'darwin' ? 'close' : 'quit',
                },
            ],
        },
    ]);
};
