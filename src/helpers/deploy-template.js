const { cd, exec } = require('shelljs');
const { deploy: { baseBranch } } = require('./../../config');
const websitePath = require('./get-website-path');
const log = require('./log');
const { INFO } = require('./../constants/log-level');

const deployTemplate = (template, version) => {
  const branchName = `${template}-${version}`;
  log(`changing to path ${websitePath}`, INFO);
  cd(websitePath);
  log(`staging template ${branchName}`, INFO);
  exec(`git checkout -b ${branchName}`);
  exec('git add core/*');
  exec(`git commit -m "${template}.${version}"`);
  log(`switching to base branch ${baseBranch}`, INFO);
  exec(`git checkout ${baseBranch} && git pull origin ${baseBranch}`);
  log(`merging ${branchName} into ${baseBranch}`, INFO);
  exec(`git merge ${branchName}`);
  exec(`git push origin ${baseBranch}`);
  exec(`git branch -d ${branchName}`);
};

module.exports = deployTemplate;
