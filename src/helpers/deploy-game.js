const { cd, exec } = require('shelljs');
const { deploy: { baseBranch } } = require('./../../config');
const releasePath = require('./get-release-path');
const log = require('./log');
const { INFO } = require('./../constants/log-level');

const deployGame = (branchName, projectName, ticketId) => {
  log(`changing to path ${releasePath}`, INFO);
  cd(releasePath);
  log(`staging project ${projectName}`, INFO);
  exec(`git add ${projectName}`);
  exec(`git commit -m "${ticketId} - ${projectName} release"`);
  log(`switching to base branch ${baseBranch}`, INFO);
  exec(`git checkout ${baseBranch} && git pull origin ${baseBranch}`);
  log(`merging ${branchName} into ${baseBranch}`, INFO);
  exec(`git merge ${branchName}`);
  exec(`git push origin ${baseBranch}`);
  exec(`git branch -d ${branchName}`);
};

module.exports = deployGame;
