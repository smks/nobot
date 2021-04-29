const { cd, exec } = require('shelljs');

const { templates } = require('../../config');

const updateTemplate = (template, templatePath) => {
  cd(templatePath);
  const { baseBranch } = templates[template];
  exec(`git pull origin ${baseBranch}`);
};

module.exports = updateTemplate;
