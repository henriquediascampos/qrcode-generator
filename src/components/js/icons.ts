import { ipcRenderer } from 'electron';

export default function icons() {
    Array.from(document.querySelectorAll('.basic-icon')).forEach((iconElement) => {
        const uri = `icon-${iconElement.textContent}`;
        console.log(uri);
        ipcRenderer.send(uri, iconElement.textContent);
        ipcRenderer.on(uri, (event, response) => {
            iconElement.innerHTML = response;
        });
    });
}
