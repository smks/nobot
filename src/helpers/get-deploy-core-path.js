const { join } = require('path');
const { deploy: { name, coreDirectory } } = require('./../../config');

module.exports = join(__dirname, '..', '..', 'repositories', name, coreDirectory);
