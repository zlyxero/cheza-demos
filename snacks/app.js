const { Elarian } = require('elarian');
const { Cheza } = require('cheza');

require('dotenv').config();

const states = {
    initial: {
        input:{
            default: {
                screen: 'Order a snack!\n1.Cookie\n2.Chips\n',
                state: 'home',
            },
        }
    },

    home: {
        input: {
            1: {
                screen: 'You ordered a cookie!',
                state: 'end'
            },

            2: {
                screen: 'You ordered chips!',
                state: 'end'
            },

            invalid: {
                screen: 'Invalid input. Order a snack!\n1.Cookie\n2.Chips\n',
                state: 'home'
            }
        }
    }
}

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