const fse = require('fs-extra');
const { join } = require('path');
const templatesPath = require('../../helpers/get-templates-path');
const releasePath = require('../../helpers/get-release-path');
const buildTemplate = require('../../helpers/build-template');
const createDeployBranch = require('../../helpers/create-deploy-branch');
const deployGame = require('../../helpers/deploy-game');
const log = require('../../helpers/log');
const { ROCK_PAPER_SCISSORS } = require('../../constants/templates');
const { INFO, SUCCESS, ERROR } = require('../../constants/log-levels');
const { JSON_WHITESPACE, GAME_JSON } = require('../../constants/common');
const transform = require('./transform');

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
  const templateReleaseDestination = join(releasePath, projectName);

  const ignoreCoreFiles = src => !src.match(/core/);

  fse.copy(templateReleaseSource, templateReleaseDestination, { filter: ignoreCoreFiles })
    .then(() => transform(ticketInformation))
    .then((newValues) => {
      const configFile = join(templateReleaseDestination, GAME_JSON);
      return fse.writeJsonSync(configFile, newValues, { spaces: JSON_WHITESPACE });
    })
    .then(() => {
      log(`built ${templateReleaseDestination}`, SUCCESS);
      log(`deploying ${branchName}`, INFO);
      deployGame(branchName, projectName, ticketId);
    })
    .catch(e => log(e, ERROR));
};

module.exports = create;
