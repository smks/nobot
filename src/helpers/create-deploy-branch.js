const { cd, exec } = require('shelljs');
const getDeployPath = require('./get-deploy-path');

const createDeployBranch = (branchName) => {
  cd(getDeployPath());
  exec('git checkout master');
  exec('git pull origin master');
  exec(`git checkout -b ${branchName}`);
};

module.exports = createDeployBranch;
