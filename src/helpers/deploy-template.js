const { cd, exec } = require('shelljs');
const { deploy: { baseBranch } } = require('../../config');
const websitePath = require('./get-website-path');
const log = require('./log');
const { INFO } = require('../constants/log-levels');

const deployTemplate = (template, version) => {
  
};

module.exports = deployTemplate;
