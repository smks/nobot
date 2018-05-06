const fse = require('fs-extra');
const { join } = require('path');
const templatesPath = require('../../helpers/get-templates-path');
const releasePath = require('../../helpers/get-release-path');
const buildTemplate = require('../../helpers/build-template');
const createDeployBranch = require('../../helpers/create-deploy-branch');
const deployGame = require('../../helpers/deploy-game');
const log = require('../../helpers/log');
const { ROCK_PAPER_SCISSORS } = require('../../constants/templates');
const { INFO, SUCCESS, ERROR } = require('../../constants/log-levels');
const { JSON_WHITESPACE, GAME_JSON } = require('../../constants/common');
const transform = require('./transform');

const create = (ticketId, ticketInformation) => {
  
}

module.exports = create;
