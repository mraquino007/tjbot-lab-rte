var config = require('./config.json');
const TJBot = require('tjbot');

var tj = new TJBot(config.hardware, config.configuration, config.credentials);
tj.speak("ola, eu sou a TJ Bot!!!").then(function() {
});
