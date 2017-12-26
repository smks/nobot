const { cd, exec } = require('shelljs');
const { deploy: { baseBranch } } = require('./../../config');

const updateTemplate = (templatePath) => {
  cd(templatePath);
  exec(`git pull origin ${baseBranch}`);
};

module.exports = updateTemplate;
