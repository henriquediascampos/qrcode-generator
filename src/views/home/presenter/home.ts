import { ipcRenderer, IpcRendererEvent } from 'electron';

const $INPUT_FILE = document.querySelector('#input_file') as HTMLInputElement;
const $FILE_CONTROL = document.querySelector('#file_control') as HTMLInputElement;

const $BTN_OPEN_FILE = document.querySelector('#btnOpenFile') as HTMLButtonElement;
const $BTN_CLEN_FILE = document.querySelector('#btnCleanFile') as HTMLButtonElement;

$BTN_OPEN_FILE.addEventListener('click', () => {
    $FILE_CONTROL.click();
    $BTN_OPEN_FILE.classList.toggle('hidden');
    $BTN_CLEN_FILE.classList.toggle('hidden');
});

$BTN_CLEN_FILE.addEventListener('click', () => {
    $FILE_CONTROL.value = '';
    alterInputFile('');
    $BTN_OPEN_FILE.classList.toggle('hidden');
    $BTN_CLEN_FILE.classList.toggle('hidden');
});

$FILE_CONTROL.addEventListener('change', (event) => {
    const fileElement = event.target as HTMLInputElement;
    if (fileElement.files.length > 0) {
        const files = Array.from(fileElement.files);
        if (files.some((f) => f.type !== 'text/plain')) {
            alert('tipo de arquivo nao permitido');
            fileElement.value = '';
            return;
        }

        alterInputFile(files.map((f) => f.name).join(','));

        ipcRenderer.send(
            'send-files',
            files.map((f) => f.path)
        );

        ipcRenderer.on('send-files', (event: IpcRendererEvent, paths: string[]) => {
            // console.log(paths);
        });
    } else {
        $FILE_CONTROL.value = '';
        alterInputFile('');
    }
});

function alterInputFile(value: string) {
    $INPUT_FILE.value = value;
    $INPUT_FILE.dispatchEvent(new Event('change'));
    $INPUT_FILE.dispatchEvent(new Event('input'));
}
