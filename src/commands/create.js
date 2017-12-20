require('colors');
const { ROCK_PAPER_SCISSORS } = require('./../constants/templates');
const getTicketData = require('./../helpers/get-ticket-data');
const log = require('./../helpers/log');

const create = (ticketId) => {

  if (ticketId === undefined) {
    log("You need to pass a ticket ID: e.g. 'GS-101'", 'error');
    process.exit(0);
  }

  getTicketData(ticketId)
    .then(ticketInformation => {

      const { template } = ticketInformation;

      switch (template) {

        case ROCK_PAPER_SCISSORS:
          require('./../builders/rock-paper-scissors')(ticketId, ticketInformation);
          break;

        default:
          throw new Error(`Could not find template ${template}`);

      }

    })
    .catch(e => log(e));
};

module.exports = create;
