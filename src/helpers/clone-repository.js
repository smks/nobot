const shell = require('shelljs');

const clone = (repositoryURL, branch) => {
    shell.exec(`git clone ${repositoryURL} --progress -b ${branch}`);
};

module.exports = clone;
