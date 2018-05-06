require('colors');
const { ROCK_PAPER_SCISSORS } = require('../constants/templates');
const { ERROR } = require('../constants/log-levels');
const getTicketData = require('../helpers/get-ticket-data');
const log = require('../helpers/log');
// game creators
const createRockPaperScissors = require('../creators/rock-paper-scissors');

