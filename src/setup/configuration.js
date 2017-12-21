const fs = require('fs-extra');
const { join } = require('path');
require('colors');

const setupConfiguration = (onFinished) => {
  const configPath = join(__dirname, '..', '..', 'config');
  const configFiles = fs.readdirSync(configPath).filter(dir => dir.match(/example/));

  let configFiles = [];

  configFiles.map((configFileExample) => {
    const exampleConfig = join(configPath, configFileExample);
    const newConfig = join(configPath, configFileExample.replace('.example', ''));
    if (fs.existsSync(newConfig)) {
      return;
    }
    configFiles.push(fs.copy.bind(null, exampleConfig, newConfig));
  });

  Promises.all(configFiles)
    .then(onFinished);
};

module.exports = setupConfiguration;
