const shell = require('shelljs');

const buildTemplate = (templatePath) => {
  shell.cd(templatePath);
  shell.exec('npm install');
  shell.exec('npm run build');
};

module.exports = buildTemplate;
