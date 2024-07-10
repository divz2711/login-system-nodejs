const fs = require('fs');
const filepath = './logFile.txt';

const dataEntryLogger = (request, response, next) => {
    response.on('finish', () => {
        const currentDate = new Date();
        const status = response.statusCode >= 400 ? 'Authentication Failed' : 'Authentication Successful';
        const logMessage = `
New user Authenticated!
Username: ${request.body.uname}
Password: ${request.body.upwd}
URL: ${request.originalUrl}
Date: ${currentDate.toLocaleString()}
Method Type: ${request.method}
Status: ${status}

`;
        fs.appendFileSync(filepath, logMessage, 'utf-8');
    });

    next();
}

module.exports = dataEntryLogger;
