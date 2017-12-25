const { cd, exec } = require('shelljs');
const { deploy: { baseBranch } } = require('./../../config');
const deployPath = require('./get-deploy-path');
const log = require('./log');
const { INFO } = require('./../constants/log-level');

const deployGame = (branchName, projectName, ticketId) => {
  log(`changing to path ${deployPath}`, INFO);
  cd(deployPath);
  log(`staging project ${projectName}`, INFO);
  exec(`git add ${projectName}`);
  exec(`git commit -m "${ticketId} - ${projectName} release"`);
  log(`switching to base branch ${baseBranch}`, INFO);
  exec(`git checkout ${baseBranch} && git pull origin ${baseBranch}`);
  log(`merging ${branchName} into ${baseBranch}`, INFO);
  exec(`git branch -d ${branchName}`);
  exec(`git merge ${branchName}`);
  exec(`git push origin ${baseBranch}`);
};

module.exports = deployGame;
