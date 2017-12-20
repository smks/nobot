const shell = require('shelljs');
const getDeployPath = require('./get-deploy-path');

const createDeployBranch = (branchName) => {
  const deployPath = getDeployPath();
  shell.cd(deployPath);
  shell.exec('git checkout master');
  shell.exec('git pull origin master');
  shell.exec(`git checkout -b ${branchName}`);
};

module.exports = createDeployBranch;
