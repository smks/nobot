const fs = require('fs-extra');
const path = require('path');
const getTemplatesPath = require('./../../helpers/get-templates-path');
const getDeployPath = require('./../../helpers/get-deploy-path');
const buildTemplate = require('./../../helpers/build-template');
const createDeployBranch = require('./../../helpers/create-deploy-branch');
const log = require('./../../helpers/log');
const { ROCK_PAPER_SCISSORS } = require('./../../constants/templates');
const updateValues = require('./update-values');

const build = (ticketId, ticketInformation) => {
  const { projectName } = ticketInformation;

  // 1. run npm & build production version of template
  const templatePath = path.join(getTemplatesPath(), ROCK_PAPER_SCISSORS);
  buildTemplate(templatePath);

  // 2. create a branch for deployment repository
  const branchName = `${ticketId}_${projectName}`;
  createDeployBranch(branchName);

  // 3. create copy of template & update config values
  const templateReleaseSource = path.join(templatePath, 'public');
  const templateReleaseDestination = path.join(getDeployPath(), projectName);

  fs.copy(templateReleaseSource, templateReleaseDestination)
    .then(updateValues.bind(null, ticketInformation))
    .then((newValues) => {
      const configFile = path.join(templateReleaseDestination, 'game.json');
      return fs.writeJsonSync(configFile, newValues, { spaces: 2 });
    })
    .then(() => log(`Built ${templateReleaseDestination}`, 'success'))
    .catch(e => log(e, 'error'));
};

module.exports = build;
