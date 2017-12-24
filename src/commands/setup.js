const setupDeployment = require('./../setup/deployment');
const setupTemplates = require('./../setup/templates');

const setup = () => {
  setupDeployment();
  setupTemplates();
};

module.exports = setup;
