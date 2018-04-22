require('colors');
const {
  ERROR, WARNING, INFO, SUCCESS
} = require('../constants/log-levels');

const log = (message, type) => {
  let colorMessage;
  switch (type) {
    case ERROR:
      colorMessage = `[${ERROR}] ${message}`.red;
      break;
    case WARNING:
      colorMessage = `[${WARNING}] ${message}`.yellow;
      break;
    case INFO:
      colorMessage = `[${INFO}] ${message}`.blue;
      break;
    case SUCCESS:
      colorMessage = `[${SUCCESS}] ${message}`.green;
      break;
    default:
      colorMessage = message;
  }
  console.log(colorMessage);
};

module.exports = log;
