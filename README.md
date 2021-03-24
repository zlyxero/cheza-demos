# Cheza

> Cheza is a USSD framework for quick (seriously quick!) prototyping and development of USSD apps. Shamelessly the USSD framework for dummies with deadlines.


## Get Started. Cheza!

You can install the package from [npm](https://www.npmjs.com/package/cheza) by running: 

```bash
$ npm install cheza
```

NB: Before using the library, you must setup an Elarian account and create a ussd channel. See [Elarian Docs](https://developers.elarian.com/) for reference.

```javascript
const { Cheza } = require('cheza');
const { Elarian } = require('elarian');

// initialize an elarian client and connect
const elarian = new Elarian(....).connect() 

// describe your ussd app
const states = {
    initial: {
        input:{
            default: {
                screen: 'Hello cheza!',
                state: 'end',
            },
        }
    } 
} 

// start the app
Cheza(elarian, states)

```

## Sample Apps

The repository includes sample cheza apps:
- hello
- snacks
- tickets



