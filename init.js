require('colors');
const { copy, existsSync } = require('fs-extra');
const log = require('./src/helpers/log');
const { SUCCESS, INFO, ERROR } = require('./src/constants/log-levels');
const shell = require('shelljs');

shell.exec('npm link');

const configFileExample = 'config.example.json';
const configFileReal = configFileExample.replace('.example', '');

if (existsSync(configFileReal)) {
  log(`config.json already exists`, INFO);
  process.exit(0);
}

copy(configFileExample, configFileReal)
.then(() => log('created configuration file', SUCCESS))
.catch(() => log('could not create config file, check permissions', ERROR));
