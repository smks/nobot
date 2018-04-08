const { join } = require('path');
const { deploy: { name } } = require('../../config');

module.exports = join(__dirname, '..', '..', 'repositories', name);
