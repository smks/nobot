const { cd, exec } = require('shelljs');
const { existsSync } = require('fs');
const { join } = require('path');
const log = require('../helpers/log');
const templatesPath = require('../helpers/get-templates-path');

const { templates } = require('../../config');

const setupTemplates = () => {
  cd(templatesPath);
  Object.keys(templates).map((template) => {
    const templatePath = join(templatesPath, template);
    if (existsSync(templatePath)) {
      return log(`Template ${template} exists`, 'info');
    }
    log(`Downloading ${template}`, 'info');
    const { baseBranch, repo } = templates[template];
    return exec(`git clone ${repo} --branch ${baseBranch} --
    progress ${template}`);
  });
};
module.exports = setupTemplates;
