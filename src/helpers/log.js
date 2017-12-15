'use strict';

require('colors');

// Log output with prefix
const log = (message, type) => {
    let colorMessage;
    switch (type) {
        case 'error':
            colorMessage = `[ERROR] ${message}`.red;
            break;
        case 'warning':
            colorMessage = `[WARNING] ${message}`.yellow;
            break;
        case 'success':
            colorMessage = `[SUCCESS] ${message}`.green;
            break;
        default:
            colorMessage = `[INFO] ${message}`;
    }
    console.log(colorMessage);
};

module.exports = log;
