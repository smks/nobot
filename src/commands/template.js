const fs = require('fs-extra');
const { join } = require('path');
const templatesPath = require('../helpers/get-templates-path');
const deployCorePath = require('../helpers/get-deploy-core-path');
const buildTemplate = require('../helpers/build-template');
const updateTemplate = require('../helpers/update-template');
const log = require('../helpers/log');
const readline = require('readline-sync');
const { SUCCESS, ERROR } = require('../constants/log-levels');
const deployTemplate = require('../helpers/deploy-template');

const template = ({ id }) => {
  let choice = id;

  if (choice === undefined || templates.includes(choice) === false) {
    const templates = fs.readdirSync(templatesPath).filter(t => t.match(/\./) === null);
    const index = readline.keyInSelect(templates, 'choose template to release ');
    if (index === -1) {
      console.log('template release cancelled')
      process.exit(0);
    }
    choice = templates[index];
  }

  console.log(choice);

  const templatePath = join(templatesPath, choice);

  updateTemplate(templatePath);

  buildTemplate(templatePath);

  const templateReleaseSource = join(templatePath, 'public', 'core');
  const templateReleaseDestination = deployCorePath;
  const templatePackageJson = join(templatePath, 'package.json');
  const { version } = fs.readJSONSync(templatePackageJson);

  fs.copy(templateReleaseSource, templateReleaseDestination)
    .then(() => {
      deployTemplate(choice, version);
      log('released latest template version', SUCCESS);
    })
    .catch(e => log(e, ERROR));
};

module.exports = template;
