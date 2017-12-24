#! /usr/bin/env node

const nobot = require('commander');
const { version } = require('./../package');

// commands
const setup = require('./commands/setup');
const create = require('./commands/create');
const release = require('./commands/release');

nobot
  .version(version);

nobot
  .command('setup')
  .description('clone all the templates and deployment website')
  .action(setup);

nobot
  .command('create <ticketId>')
  .description('creates a new game reskin')
  .action((create));

nobot
  .command('release')
  .description('releases core of template')
  .action(release);

nobot
  .command('*')
  .action(() => nobot.help());

nobot.parse(process.argv);
