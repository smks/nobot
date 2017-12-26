const { cd, exec } = require('shelljs');
const { deploy: { baseBranch } } = require('./../../config');
const deployPath = require('./get-deploy-path');

const createDeployBranch = (branchName) => {
  cd(deployPath);
  exec(`git checkout ${baseBranch}`);
  exec(`git pull origin ${baseBranch}`);
  exec(`git checkout -b ${branchName}`);
};

module.exports = createDeployBranch;
