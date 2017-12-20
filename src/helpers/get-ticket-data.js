const axios = require('axios');
const { authKey, endpoint } = require('./../../config/api');

const getTicketData = ticketId => new Promise((resolve, reject) => {
  axios({
    url: endpoint,
    params: {
      authKey,
      ticketId,
    },
  })
    .then(({ data }) => {
      resolve(data);
    })
    .catch(e => reject(e));
});

module.exports = getTicketData;
