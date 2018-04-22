const { join } = require('path');
const repositoryPath = require('./get-repositories-path');
const { deploy: { name } } = require('../../config');

module.exports = join(repositoryPath, name);
