function homeStateHook(options) {
    const userInput = options.notification.input
    
    // validate user input
    if (!(userInput === '1' || userInput === '2' || userInput === '3')) {
        return { inputErrors: true }
    }

    // update store with the selected movie
    const movies = ['', 'Star Wars', 'The Matrix', 'Blade Runner'];

    const storeUpdates = {
        movie: movies[userInput],
    }

    return { storeUpdates }
}

async function confirmationHook(options) {
    const smsChannel = {
        number: process.env.SMS_CHANNEL_NUMBER,
        channel: 'sms',
    };

    const result = await options.customer.sendMessage(
        smsChannel,
        {
            body: {
                text: `Thank you for buying a ticket to "${options.store.movie}"`,
            },
        },
    );

}

module.exports = {
    homeStateHook,
    confirmationHook,
}