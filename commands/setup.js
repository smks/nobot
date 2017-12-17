const setupDeployment = require('./../src/setup/setup-deployment');
const setupTemplates = require('./../src/setup/setup-templates');

const setup = () => {
  setupDeployment();
  setupTemplates();
};

module.exports = setup;
