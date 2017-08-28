var config = require('../config.json');
const TJBot = require('tjbot');

var tj = new TJBot(config.hardware, config.configuration, config.credentials);

tj.speak("hello world").then(function() {
    return tj.speak("my name is tjbot");
}).then(function () {
    return tj.speak("it's very nice to meet you!");
});