#! /usr/bin/env node

const nobot = require('commander');
const { version } = require('./package');

// commands
const setup = require('./commands/setup');
const create = require('./commands/create');
const release = require('./commands/release');

nobot
  .version(version);

nobot
  .command('setup')
  .description('prepare nobot for use')
  .action(setup);

nobot
  .command('create')
  .description('creates a new game reskin')
  .option('-t, --template <template>', 'what game template are you using?')
  .option('-p, --parameters <parameters>', 'JSON values used for build')
  .action(create);

nobot
  .command('release [env]')
  .description('releases the build')
  .option('-e, --env [env]', 'dev or prod - dev by default')
  .action(release);

nobot
  .command('*')
  .action(nobot.help);

nobot.parse(process.argv);

if (!nobot.args.length) {
  nobot.help();
}
