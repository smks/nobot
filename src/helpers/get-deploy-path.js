const path = require('path');
const { deploy } = require('./../../config/repositories');

const { name, releaseDirectory } = deploy;
const deployPath = path.join(__dirname, '..', '..', 'repositories', name, releaseDirectory);

module.exports = () => deployPath;
