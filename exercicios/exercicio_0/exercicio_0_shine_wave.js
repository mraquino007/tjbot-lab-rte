var config = require('./config.json');

const TJBot = require('tjbot');

var tj = new TJBot(config.hardware, config.configuration, config.credentials);

tj.shine('orange');

tj.armBack();

tj.shine('green');

tj.raiseArm();

tj.pulse('blue', 2.0);

tj.wave();

tj.shine(tj.randomColor());

