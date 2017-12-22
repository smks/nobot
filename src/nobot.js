#! /usr/bin/env node

const nobot = require('commander');
const { version } = require('./../package');

// commands
const setup = require('./commands/setup');
const build = require('./commands/build');
const release = require('./commands/release');

nobot
  .version(version);

nobot
  .command('setup')
  .description('clone all the templates and deployment website')
  .action(setup);

nobot
  .command('build <ticketId>')
  .description('builds a new game reskin')
  .action((build));

nobot
  .command('release')
  .description('releases the build')
  .option('-m, --auto-merge [autoMerge]', 'merge automatically to base branch')
  .action(release);

nobot
  .command('*')
  .action(() => nobot.help());

nobot.parse(process.argv);
