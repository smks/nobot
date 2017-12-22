const { cd, exec } = require('shelljs');
const { readJsonSync, existsSync } = require('fs-extra');
const { join } = require('path');
const log = require('./../helpers/log');
const repoPath = require('./../helpers/get-repositories-path');
const { deploy } = require('./../../config');

const setupDeployment = () => {  
  const { name, repo, releaseDirectory } = deploy;
  const deploymentPath = join(repoPath, name);
  if (existsSync(deploymentPath)) {
    return log(`Deployment Repository '${deploymentPath}' exists`, 'info');
  }
  cd(repoPath);
  exec(`git clone ${repo} --progress ${name}`);
};

module.exports = setupDeployment;
