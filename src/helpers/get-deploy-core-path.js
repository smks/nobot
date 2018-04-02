const { join } = require('path');
const { deploy } = require('../../config');

const { name, coreDirectory } = deploy;

module.exports = join(__dirname, '..', '..', 'repositories', name, coreDirectory);
