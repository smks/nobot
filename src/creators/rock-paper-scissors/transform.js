const fse = require('fs-extra');
const path = require('path');
const templatesPath = require('../../helpers/get-templates-path');
const { ROCK_PAPER_SCISSORS } = require('../../constants/templates');
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
  
  

});

module.exports = transform;
