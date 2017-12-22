const { cd, exec } = require('shelljs');

const buildTemplate = templatePath => {
  cd(templatePath);
  exec('npm install');
  exec('npm run build');
};

module.exports = buildTemplate;
