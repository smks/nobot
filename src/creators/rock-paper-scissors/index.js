const fs = require('fs-extra');
const { join } = require('path');
const templatesPath = require('./../../helpers/get-templates-path');
const deployPath = require('./../../helpers/get-deploy-path');
const buildTemplate = require('./../../helpers/build-template');
const createDeployBranch = require('./../../helpers/create-deploy-branch');
const deployGame = require('./../../helpers/deploy-game');
const log = require('./../../helpers/log');
const { ROCK_PAPER_SCISSORS } = require('./../../constants/templates');
const { SUCCESS, ERROR } = require('./../../constants/log-level');
const updateValues = require('./update-values');

const create = (ticketId, ticketInformation) => {
  const { projectName } = ticketInformation;

  // 1. create a branch for deployment repository
  const branchName = `${ticketId}_${projectName}`;
  createDeployBranch(branchName);

  // 2. run npm & build production version of template
  const templatePath = join(templatesPath, ROCK_PAPER_SCISSORS);
  buildTemplate(templatePath);

  // 3. create copy of template & update config values
  const templateReleaseSource = join(templatePath, 'public');
  const templateReleaseDestination = join(deployPath, projectName);

  const ignoreCoreFiles = src => !src.match(/core/);

  fs.copy(templateReleaseSource, templateReleaseDestination, { filter: ignoreCoreFiles })
    .then(updateValues.bind(null, ticketInformation))
    .then((newValues) => {
      const configFile = join(templateReleaseDestination, 'game.json');
      return fs.writeJsonSync(configFile, newValues, { spaces: 4 });
    })
    .then(() => {
      log(`built ${templateReleaseDestination}`, SUCCESS);
      deployGame(branchName, projectName, ticketId);
    })
    .catch(e => log(e, ERROR));
};

module.exports = create;
