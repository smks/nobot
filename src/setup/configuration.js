const fs = require('fs-extra');
const path = require('path');
require('colors');

const configPath = path.join(__dirname, '..', '..', 'config');

const configFiles = fs.readdirSync(configPath).filter(dir => dir.match(/example/));

configFiles.map((configFileExample) => {
  const exampleConfig = path.join(configPath, configFileExample);
  const newConfig = path.join(configPath, configFileExample.replace('.example', ''));
  if (fs.existsSync(newConfig)) {
    return;
  }
  return fs.copy(exampleConfig, newConfig)
    .then(() => console.log(`Successfully created ${newConfig}`.green))
    .catch(err => console.error(err));
});