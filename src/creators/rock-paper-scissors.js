const getTicketData = require('./../helpers/get-ticket-data');
const originalTemplateConfig = require('./../../repositories/templates/rock-paper-scissors/public/game');

const build = ticketId => getTicketData(ticketId)
    .then(({
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
    }) => {
        const newConfig = originalTemplateConfig;

        newConfig.id = id;
        newConfig.projectName = projectName;
        newConfig.theme.fontFamily = font;
        newConfig.theme.customStyles = fontUrl;
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

        return newConfig;
    });

    module.exports = build;