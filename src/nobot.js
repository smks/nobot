#! /usr/bin/env node

const nobot = require('commander');
const { version } = require('../package');

// commands
const setup = require('./commands/setup');
const game = require('./commands/game');
const template = require('./commands/template');

nobot
  .version(version);

nobot
  .command('setup')
  .description('clone repository dependencies')
  .action(setup);

nobot
  .command('game <ticketId>')
  .description('create and deploy a new game reskin')
  .action(game);

nobot
  .command('template')
  .description('release core files of template')
  .option('-i --id [id]', 'what template to release')
  .action(template);

nobot
  .command('*')
  .action(() => nobot.help());

nobot.parse(process.argv);

if (!process.argv.slice(2).length) {
  nobot.help();
}
