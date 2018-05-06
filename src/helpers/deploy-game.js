const { cd, exec } = require('shelljs');
const { deploy: { baseBranch } } = require('../../config');
const releasePath = require('./get-release-path');
const log = require('./log');
const { INFO } = require('../constants/log-levels');

const deployGame = (branchName, projectName, ticketId) => {
  
};

module.exports = deployGame;
