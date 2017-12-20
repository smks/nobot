const { cd, exec } = require('shelljs');
const { existsSync } = require('fs-extra');
const { join } = require('path');
const { templates } = require('./../../config/repositories');
const log = require('./../helpers/log');
const getTemplatesPath = require('./../helpers/get-templates-path');
const cloneRepository = require('./../helpers/clone-repository');

const setupTemplates = () => {
  const templatesPath = getTemplatesPath();
  cd(templatesPath);
  Object.keys(templates).map((template) => {
    const templatePath = join(templatesPath, template);
    if (existsSync(templatePath)) {
      return log(`Template ${template} exists`, 'info');
    }
    log(`Downloading ${template}`, 'info');
    return exec(`git clone ${templates[template]} --progress ${template}`);
  });
};

module.exports = setupTemplates;
