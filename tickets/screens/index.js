const HOME_SCREEN = `\
Buy a movie ticket:
1. Star Wars
2. The Matrix
3. Blade Runner
`
function CONFIRMATION_SCREEN(options) {
    return `Buy "${options.store.movie}" ticket \n1.Confirm \n0.Back`
}

const SUCCESS_SCREEN = 'Thank you for buying a ticket! You will recieve an SMS confirming your order shortly.'


module.exports = {
    HOME_SCREEN,
    CONFIRMATION_SCREEN,
    SUCCESS_SCREEN,
}