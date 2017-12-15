const shell = require('shelljs');

const changeDirectory = (path) => {
    shell.cd(path);
};

module.exports = changeDirectory;
