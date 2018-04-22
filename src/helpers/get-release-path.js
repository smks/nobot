const { join } = require('path');
const repositoryPath = require('./get-repositories-path');
const { deploy: { name, releaseDirectory } } = require('../../config');

module.exports = join(repositoryPath, name, releaseDirectory);
