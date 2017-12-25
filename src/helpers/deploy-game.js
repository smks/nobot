const { cd, exec } = require('shelljs');
const { deploy: { baseBranch } } = require('./../../config');
const deployPath = require('./get-deploy-path');

const deployGame = (branchName, projectName, ticketId) => {
  cd(deployPath);
  exec(`git add ${projectName}`);
  exec(`git commit -m '${ticketId} - ${projectName} release'`);
  exec(`git checkout ${baseBranch} && git pull origin ${baseBranch}`);
  exec(`git merge ${branchName}`);
  exec(`git push origin ${baseBranch}`);
};

module.exports = deployGame;
