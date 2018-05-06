const { cd, exec } = require('shelljs');
const { existsSync } = require('fs');
const { deploy: { name, repo } } = require('../../config');
const log = require('../helpers/log');
const repositoriesPath = require('../helpers/get-repositories-path');
const websitePath = require('../helpers/get-website-path');
const { INFO } = require('../constants/log-levels');

const setupDeployment = () => {
  
};

module.exports = setupDeployment;
