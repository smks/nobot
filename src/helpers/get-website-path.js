const { join } = require('path');
const { deploy } = require('./../../config');

const { name } = deploy;

module.exports = join(__dirname, '..', '..', 'repositories', name);
