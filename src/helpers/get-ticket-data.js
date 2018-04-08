const axios = require('axios');
const { api } = require('../../config');

const { authKey, endpoint } = api;

const getTicketData = ticketId => axios({
  url: endpoint,
  params: {
    authKey,
    ticketId,
  },
});

module.exports = getTicketData;
