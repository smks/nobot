require('colors');
const { ROCK_PAPER_SCISSORS } = require('../constants/templates');
const { ERROR } = require('../constants/log-levels');
const getTicketData = require('../helpers/get-ticket-data');
const log = require('../helpers/log');
// game builders
const createRockPaperScissors = require('../creators/rock-paper-scissors');

const game = (ticketId) => {
  getTicketData(ticketId)
    .then(({ data }) => {
      switch (template) {
        case ROCK_PAPER_SCISSORS:
          createRockPaperScissors(ticketId, data);
          break;

        default:
          throw new Error(`Could not find template ${data.template}`);
      }
    })
    .catch(e => log(e, ERROR));
};

module.exports = game;
