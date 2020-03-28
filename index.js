let getConfig = require('./utils/config.js').getConfig;
let loadCase = require('./utils/cases.js').loadCase;
let taskRunner = require('./utils/taskRunner.js');

let environment = 'development';
let config = getConfig(environment);

let context = {
    environment: environment,
    config: config,
    data: []
};

loadCase();
taskRunner.runCase('login', context);