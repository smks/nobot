const setupDeployment = require('./../setup/setup-deployment');
const setupTemplates = require('./../setup/setup-templates');

const setup = () => {
  setupDeployment();
  setupTemplates();
  // @todo setupConfig
};

module.exports = setup;
