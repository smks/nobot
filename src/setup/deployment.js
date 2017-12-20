const { cd, exec } = require('shelljs');
const { existsSync } = require('fs-extra');
const { join } = require('path');
const { deploy } = require('./../../config/repositories');
const log = require('./../helpers/log');
const getRepositoriesPath = require('./../helpers/get-repositories-path');

const setupDeployment = () => {
  const repoPath = getRepositoriesPath();
  const { name, repo, path } = deploy;
  const deploymentPath = join(repoPath, name);
  if (existsSync(deploymentPath)) {
    return log(`Deployment Repository '${deploymentPath}' exists`, 'info');
  }
  cd(repoPath);
  exec(`git clone ${repo} --progress ${name}`);
};

module.exports = setupDeployment;
