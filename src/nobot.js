#! /usr/bin/env node

const nobot = require('commander');
const { version } = require('../package');

// commands
const setup = require('./commands/setup');
const game = require('./commands/game');
const template = require('./commands/template');

nobot
  .version(version);

