var config = require('./config.json');
const TJBot = require('tjbot');

var tj = new TJBot(config.hardware, config.configuration, config.credentials);

tj.listen(function(text) {
});
