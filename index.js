let getConfig = require('./utils/config.js').getConfig;
let loadCase = require('./utils/cases.js').loadCase;
let taskRunner = require('./utils/taskRunner.js');
let Context = require('./classes/Context.js').Context;

let environment = 'development';
let config = getConfig(environment);


let context = new Context(environment, config);

loadCase();

taskRunner.runCase('homepage', context).then(() => {
    taskRunner.runCase('login', context).then(() => {
        taskRunner.runCase('cartpage', context);
    });
});