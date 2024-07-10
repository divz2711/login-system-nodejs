const loggerData = require('../data/loggerData');

const checkLoggerData = (request, response) => {
    const { uname, upwd } = request.body;
    const user = loggerData.find(iterator => iterator.uname === uname && iterator.upwd === upwd);

    if (user) {
        response.status(200).json({ message: "Authentication Successful" });
    } else {
        response.status(404).json({ message: "Authentication Failed" });
    }
}

module.exports = { checkLoggerData };
