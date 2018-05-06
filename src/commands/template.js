const fse = require('fs-extra');
const { join } = require('path');
const templatesPath = require('../helpers/get-templates-path');
const deployCorePath = require('../helpers/get-deploy-core-path');
const buildTemplate = require('../helpers/build-template');
const updateTemplate = require('../helpers/update-template');
const log = require('../helpers/log');
const readlineSync = require('readline-sync');
const { SUCCESS, ERROR } = require('../constants/log-levels');
const { NO_CHOICE_MADE } = require('../constants/common');
const deployTemplate = require('../helpers/deploy-template');

const template = ({ id }) => {
 
}

module.exports = template;
