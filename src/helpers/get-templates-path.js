const { join } = require('path');
const repositoryPath = require('./get-repositories-path');

module.exports = join(repositoryPath, 'templates');
