const { cd, exec } = require('shelljs');
const { existsSync } = require('fs');
const { deploy: { name, repo } } = require('../../config');
const log = require('../helpers/log');

const repositoriesPath = require('../helpers/get-repositories-path');

const websitePath = require('../helpers/get-website-path');
const { INFO } = require('../constants/log-levels');

const setupDeployment = () => {
  if (existsSync(websitePath)) {
    return log(`Deployment Repository '${websitePath}'
    exists`, INFO);
  }
  cd(repositoriesPath);
  return exec(`git clone ${repo} --progress ${name}`);
};
module.exports = setupDeployment;
