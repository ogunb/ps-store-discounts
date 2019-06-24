const axios = require('axios');

const psnEndpoint = 'https://store.playstation.com/valkyrie-api';
const psnApi = axios.create({
    baseURL: psnEndpoint,
});

module.exports = { psnApi };