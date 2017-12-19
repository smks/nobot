const axios = require('axios');
const originalTemplateConfig = require('./../../repositories/templates/rock-paper-scissors/public/game');

const getProjectData = (ticketId) => {
  try {
    axios({
      url: 'http://opencanvas.co.uk/nira/rest/api/latest/ticket',
      params: {
        authKey: 'NOBOT_123',
        ticketId
      }
    })
    .then(({ data }) => {

      const newConfig = originalTemplateConfig;

      newConfig.id = data.id;
      newConfig.projectName = data.projectName;
      newConfig.theme.fontFamily = data.font;
      newConfig.theme.customStyles = data.fontUrl;
      newConfig.theme.path = data.assetsPath;
      newConfig.labels.rock = data.labelFirstOption;
      newConfig.labels.paper = data.labelSecondOption;
      newConfig.labels.scissors = data.labelThirdOption;
      newConfig.screens.choice.title = data.screenChoiceTitle;
      newConfig.screens.choice.subtitle = data.screenChoiceSubtitle;
      newConfig.screens.result.won = data.screenResultWon;
      newConfig.screens.result.lost = data.screenResultLost;
      newConfig.screens.result.draw = data.screenResultDraw;
      newConfig.screens.result.replay = data.screenResultReplay;
      newConfig.screens.result.feedback.won = data.screenResultFeedbackWon;
      newConfig.screens.result.feedback.lost = data.screenResultFeedbackLost;
      newConfig.screens.result.feedback.draw = data.screenResultFeedbackDraw;

      console.log(newConfig);
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = getProjectData;

getProjectData('GS-102');