var config = require('../config.json');
var workspaceId = '2d8df45a-6e86-4c8c-8ee7-421aa9770048';

const TJBot = require('tjbot');

var tj = new TJBot(config.hardware, config.configuration, config.credentials);

tj.shine('orange');

tj.armBack();

tj.shine('green');

tj.raiseArm();

tj.pulse('blue', 2.0);

tj.wave();

console.log("Cores que o TJ Bot Conhece " + tj.shineColors());

tj.shine(tj.randomColor());

