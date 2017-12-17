const path = require('path');

const repositoriesPath = path.join(__dirname, '..', '..', 'repositories');

module.exports = () => repositoriesPath;
