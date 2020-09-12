const fs = require('fs');
const path = require('path')

const mimeTypes = {
    html: 'text/html',
    css: 'text/css'
}

const getMimeType = (file) => {
    return path.extname(file).replace(/^\./, '');
}

const handler = (request, response) => {
    const fileName = path.join(__dirname, '../public', request.url);

    if (fs.existsSync(fileName)) {
        const file = fs.readFileSync(fileName);
        response.writeHead(200, { 'Content-Type': getMimeType(fileName) });
        response.write(file);

        return true;
    }
    return false;
}

module.exports.fileHandler = handler;
