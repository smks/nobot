const fse = require('fs-extra');
const path = require('path');
const templatesPath = require('../../helpers/get-templates-path');

const { ROCK_PAPER_SCISSORS } =
require('../../constants/templates');
const { GAME_JSON } = require('../../constants/common');

const transform = ({
  id,
  projectName,
  font,
  fontUrl,
  assetsPath,
  labelFirstOption,
  labelSecondOption,
  labelThirdOption,
  screenChoiceTitle,
  screenChoiceSubtitle,
  screenResultWon,
  screenResultLost,
  screenResultDraw,
  screenResultReplay,
  screenResultFeedbackWon,
  screenResultFeedbackLost,
  screenResultFeedbackDraw
}) => new Promise((resolve, reject) => {
  try {
    const originalTemplateConfigPath = path.join(
      templatesPath,
      ROCK_PAPER_SCISSORS,
      'public',
      GAME_JSON
    );
    const originalTemplateConfig = fse.readJsonSync(originalTemplateConfigPath);
    const newConfig = originalTemplateConfig;
    newConfig.id = id;
    newConfig.projectName = projectName;
    newConfig.theme.fontFamily = font;
    newConfig.customStyles = [
      fontUrl
    ];
    newConfig.theme.path = assetsPath;
    newConfig.labels.rock = labelFirstOption;
    newConfig.labels.paper = labelSecondOption;
    newConfig.labels.scissors = labelThirdOption;
    newConfig.screens.choice.title = screenChoiceTitle;
    newConfig.screens.choice.subtitle = screenChoiceSubtitle;
    newConfig.screens.result.won = screenResultWon;
    newConfig.screens.result.lost = screenResultLost;
    newConfig.screens.result.draw = screenResultDraw;
    newConfig.screens.result.replay = screenResultReplay;
    newConfig.screens.result.feedback.won = screenResultFeedbackWon;
    newConfig.screens.result.feedback.lost = screenResultFeedbackLost;
    newConfig.screens.result.feedback.draw = screenResultFeedbackDraw;
    resolve(newConfig);
  } catch (e) {
    reject(e);
  }
});
module.exports = transform;
