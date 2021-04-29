const axios = require('axios');

const { api: { authKey, endpoint } } =

require('../../config');

const getTicketData = ticketId => axios({
  url: endpoint,
  params: {
    authKey,
    ticketId
  }
});
module.exports = getTicketData;
