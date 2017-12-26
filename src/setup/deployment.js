const { cd, exec } = require('shelljs');
const { join } = require('path');
const log = require('./../helpers/log');
const repoPath = require('./../helpers/get-repositories-path');
const { deploy } = require('./../../config');
const { existsSync } = require('fs');

const setupDeployment = () => {
  const { name, repo } = deploy;
  const deploymentPath = join(repoPath, name);
  if (existsSync(deploymentPath)) {
    return log(`Deployment Repository '${deploymentPath}' exists`, 'info');
  }
  cd(repoPath);
  return exec(`git clone ${repo} --progress ${name}`);
};

module.exports = setupDeployment;
