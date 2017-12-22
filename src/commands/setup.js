const setupDeployment = require('./../setup/deployment');
const setupTemplates = require('./../setup/templates');

const repositories = () => {
  setupDeployment();
  setupTemplates();
};

module.exports = repositories;
