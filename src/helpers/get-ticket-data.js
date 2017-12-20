const axios = require('axios');
const { endpoint } = require('./../../config/');

const getTicketData = ticketId => {

    axios({
        url: endpoint,
        params: {
        authKey: 'NOBOT_123',
        ticketId
        }
    })
    .then(({ data }) => {
        resolve(data);
    });

};

module.exports = getTicketData;