var config = require('../config.json');
var workspaceId = '2d8df45a-6e86-4c8c-8ee7-421aa9770048';

const TJBot = require('tjbot');

var tj = new TJBot(config.hardware, config.configuration, config.credentials);

tj.converse(workspaceId, "", function(response) {
    console.log("Resposta : " + response.description);
});