const path = require('path');

const templatesPath = path.join(__dirname, '..', '..', 'repositories', 'templates');

module.exports = () => templatesPath;
