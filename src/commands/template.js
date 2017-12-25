const fs = require('fs-extra');
const { join } = require('path');
const { cd, exec } = require('shelljs');
const templatesPath = require('./../helpers/get-templates-path');
const deployPath = require('./../helpers/get-deploy-core-path');
const deployCorePath = require('./../helpers/get-deploy-core-path');
const createDeployBranch = require('./../helpers/create-deploy-branch');
const buildTemplate = require('./../helpers/build-template');
const updateTemplate = require('./../helpers/update-template');
const log = require('./../helpers/log');
const readline = require('readline-sync');
const { SUCCESS, ERROR } = require('./../constants/log-level');

const template = ({ id }) => {

  let choice = id;

  const templates = fs.readdirSync(templatesPath).filter(t => t.match(/\./) === null);

  if (choice === undefined || templates.includes(choice) === false) {
    const index = readline.keyInSelect(templates, 'choose template to release ');
    choice = templates[index];
  }

  const templatePath = join(templatesPath, choice);

  updateTemplate(templatePath);

  buildTemplate(templatePath);
  
  const templateReleaseSource = join(templatePath, 'public', 'core');
  const templateReleaseDestination = deployCorePath;

  console.log(templateReleaseSource, templateReleaseDestination);

  fs.copy(templateReleaseSource, templateReleaseDestination)
    .then(() => {
      log('released latest template version', SUCCESS);
    });

};

module.exports = template;
