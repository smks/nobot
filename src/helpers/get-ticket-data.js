const axios = require('axios');
const { endpoint } = require('./../../config/');

const getTicketData = ticketId => {
    return new Promise((resolve, reject) => {
        axios({
            url: endpoint,
            params: {
            authKey: 'NOBOT_123',
            ticketId
            }
        })
        .then(({ data }) => {
            resolve(data);
        })
        .catch(reject);
    });
};

module.exports = getTicketData;