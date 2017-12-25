require('colors');
const { ROCK_PAPER_SCISSORS } = require('./../constants/templates');
const { ERROR } = require('./../constants/log-level');
const getTicketData = require('./../helpers/get-ticket-data');
const log = require('./../helpers/log');
// game builders
const createRockPaperScissors = require('./../creators/rock-paper-scissors');

const game = ticketId => {

  getTicketData(ticketId)
    .then(({ data }) => {

      const { template } = data;

      switch (template) {

        case ROCK_PAPER_SCISSORS:
          createRockPaperScissors(ticketId, data);
          break;

        default:
          throw new Error(`Could not find template ${template}`);

      }

    })
    .catch(e => log(e, ERROR));
};

module.exports = game;
