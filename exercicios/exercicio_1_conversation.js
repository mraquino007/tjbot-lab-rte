var config = require('../config.json');
var workspaceId = 'zzz';

const TJBot = require('tjbot');

var tj = new TJBot(config.hardware, config.configuration, config.credentials);

tj.converse(workspaceId, "", function(response) {
    console.log(JSON.stringify(response));
});