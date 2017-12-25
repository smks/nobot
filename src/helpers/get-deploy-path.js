const { join } = require('path');
const { deploy: { name, releaseDirectory } } = require('./../../config');

module.exports = join(__dirname, '..', '..', 'repositories', name, releaseDirectory);
