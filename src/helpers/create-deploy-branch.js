const { cd, exec } = require('shelljs');
const { deploy: { baseBranch } } = require('./../../config');
const releasePath = require('./get-release-path');

const createDeployBranch = (branchName) => {
  cd(releasePath);
  exec(`git checkout ${baseBranch}`);
  exec(`git pull origin ${baseBranch}`);
  exec(`git checkout -b ${branchName}`);
};

module.exports = createDeployBranch;
