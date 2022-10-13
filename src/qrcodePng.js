import qrcode from 'qrcode-generator';
import fs from 'fs';

const basicPath = 'assets/qrcode';

export default function generatorImageQrcod(...qrcodes) {
    qrcodes.forEach((qrcodeValue) => {
        generateFileQrcode(qrcodeValue);
    });
}

function generateFileQrcode(qrcodeValue) {
    const typeNumber = 4;
    const errorCorrectionLevel = 'L';
    const qr = qrcode(typeNumber, errorCorrectionLevel);
    qr.addData(qrcodeValue);
    qr.make();

    const image = qr.createImgTag();
    const svg = qr.createSvgTag();

    generateFileImage(image, qrcodeValue);
    generateFileSvg(svg, qrcodeValue);
}

function generateFileSvg(svg, qrcodeValue) {
    checkDir('svg');
    createFile(svg, 'svg/' + qrcodeValue + '.svg');
}

function generateFileImage(image, imageName) {
    let data = image.replace(/^<img src="data:image\/\w+;base64,/, '');
    data = data.replace(/" width="82" height="82"\/>/, '');
    let buf = Buffer.from(data, 'base64');
    checkDir('png');
    createFile(buf, 'png/' + imageName + '.png');
}

function createFile(data, imageName) {
    const filePath = checkPath(imageName);
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }

    fs.writeFile(filePath, data, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

function checkDir(folder) {
    const path = checkPath(folder);
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
    }
}
function checkPath(folder) {
    const newFolder = folder || '';
    const path = newFolder && /^\/.+$/.test(newFolder) ? basicPath + newFolder : basicPath + '/' + newFolder;
    return path;
}
