require('dotenv').config();

const { Elarian } = require('elarian');
const { Cheza } = require('cheza');

const states = require('./states')
const screens = require('./screens')



const start = () => {
    client = new Elarian({
        appId: process.env.APP_ID,
        orgId: process.env.ORG_ID,
        apiKey: process.env.API_KEY,
    });

    Cheza(client, states);

    client.connect()
        .on('error', (error) => console.error('App failed to start', error))
        .on('connected', () => console.log('App is up and running!'))
}

start();