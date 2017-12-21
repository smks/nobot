const { cd, exec } = require('shelljs');
const { existsSync } = require('fs-extra');
const { join } = require('path');
const log = require('./../helpers/log');
const getTemplatesPath = require('./../helpers/get-templates-path');

const setupTemplates = () => {
  const templatesPath = getTemplatesPath();
  const { templates } = readJsonSync(join('..', '..', 'config', 'repositories'));
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
