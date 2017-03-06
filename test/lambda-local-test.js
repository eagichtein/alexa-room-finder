/*Example test of index.js, using the lambda-local package.
If you have lambda-local installed globally a test can also be performed from the console.*/

const lambdaLocal = require('lambda-local');
const config = require('./config')

/*This is the JSON payload that would be sent when the user first agrees to book something, and an example of a normal IntentRequest.*/
var jsonPayload = {
  "session": {
    "sessionId": "",
    "application": {
      "applicationId": ""
    },
    "attributes": {
      "speechOutput": "Would you like to book a room for half an hour?", //Change this to change the *last* message used.
      "STATE": "", //Change this to change the current state. - Options: "_CONFIRMMODE" or "" (blank).
      "repromptSpeech": "I'm %s. My job is to book you a room! For further instructions, please ask for help." //Change this to change the *last* reprompt used.
    },
    "user": {
      "userId": "",
      "accessToken": config.token //Change this to change token
    },
    "new": false //Change this to change if it's a new session or not.
  },
  "request": {
    "type": "IntentRequest", //Change this to change type of request. Options: "IntentRequest" or "LaunchRequest"
    "requestId": "",
    "locale": "en-GB", //Change this to change language. Options: "en-US" or "en-GB"
    "timestamp": "",
    "intent": {
      "name": "BookIntent", //Change this to change the intent sent with the request. Options: "AMAZON.NoIntent", "AMAZON.YesIntent", "AMAZON.CancelIntent", "AMAZON.StopIntent", "AMAZON.RepeatIntent", "AMAZON.HelpIntent", "BookIntent", "Unhandled"
      "slots": {} //Change this to put something in slots
    }
  },
  "version": "1.0"
}

//Main
lambdaLocal.execute({
    event: jsonPayload,
    lambdaPath: '../lambda/index.js',
    profileName: 'default',
    timeoutMs: 3000,
    callback: function(err, data) {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    }
});
