const setupConfig = require('./../setup/configuration');
const setupDeployment = require('./../setup/deployment');
const setupTemplates = require('./../setup/templates');

const setup = () => {
  setupConfig(() => {
    setupDeployment();
    setupTemplates();
  });
};

module.exports = setup;
