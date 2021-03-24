# Tickets - sample Cheza USSD app

## Usage

**Requirements**

- NodeJS

```bash
$ git clone https://github.com/zlyxero/cheza-demos.git
$ cd cheza-demos/tickets
$ npm install
$ touch .env # create an .env file and add your elarian credentials (APP_ID, ORG_ID, API_KEY and SMS_CHANNEL_NUMBER)
$ node ./app.js
```

NB: As instructed above, before running the app add a .env file on the root app folder `cheza-demos/tickets/.env` and populate it with your elarian credentials in the following `sample` format:

```bash
APP_ID= myappid
ORG_ID= myorgid
API_KEY= mycoolapikey
SMS_CHANNEL_NUMBER = mysmschannelnumber
```

## Testing
Elarian provides a phone simulator that can be used to simulate a user dialing into the app. See [Elarian Docs](https://developers.elarian.com/) for reference.
