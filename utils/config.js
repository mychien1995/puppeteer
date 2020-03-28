let fs =  require('fs');
let path = require('path');

let getConfig = function(env) {
    let configFileName = `config.${env}.json`;
    let configFilePath =  path.resolve(__dirname, `../config/${configFileName}`);
    if (fs.existsSync(configFilePath)) {
    	let config = require(configFilePath);
    	return config;
    } else {
        throw `${env} environment does not exists`;
    }
};

exports.getConfig = getConfig;