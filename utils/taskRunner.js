let fs =  require('fs');
let path = require('path');
let getCase = require('./cases.js').getCase;

let runCase = function(caseName, context) {
	let testCase = getCase(caseName);
	testCase.run(context);
}

exports.runCase = runCase;