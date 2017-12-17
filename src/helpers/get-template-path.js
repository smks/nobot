const path = require('path');

const templatePath = path.join(__dirname, '..', '..', 'repositories', 'templates');

module.exports = () => templatePath;
