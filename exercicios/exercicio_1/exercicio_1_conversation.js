var config = require('./config.json');
var workspaceId = 'nnn';

const TJBot = require('tjbot');

var tj = new TJBot(config.hardware, config.configuration, config.credentials);

tj.converse(workspaceId, "", function(response) {
    console.log("Resposta : " + response.description);
});
