const HOOKS = require('../hooks')
const SCREENS = require('../screens')

const states = {
    initial: {
        input:{
            default: {
                screen: SCREENS.HOME_SCREEN,
                state: 'home',
            },
        }
    },

    home: {
        hook: HOOKS.homeStateHook,
    
        input: {
            1: {
                screen: SCREENS.CONFIRMATION_SCREEN,
                state: 'confirmation'
            },

            2: {
                screen: SCREENS.CONFIRMATION_SCREEN,
                state: 'confirmation'
            },

            3: {
                screen: SCREENS.CONFIRMATION_SCREEN,
                state: 'confirmation'
            },

            invalid: {
                screen: `Invalid input. ${SCREENS.HOME_SCREEN}`,
                state: 'home'
            }
        }
    },

    confirmation: {
        input: {
            1: {
                hook: HOOKS.confirmationHook,
                screen: SCREENS.SUCCESS_SCREEN,
                state: 'end'
            },

            0: {
                screen: SCREENS.HOME_SCREEN,
                state: 'home'
            },

            invalid: {
                screen: `Invalid input. ${SCREENS.CONFIRMATION_SCREEN}`,
                state: 'confirmation'
            }
        }
    }
}

module.exports = states;