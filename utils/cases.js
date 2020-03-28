let fs = require('fs');
let path = require('path');

let caseDict = {};

let loadCase = function() {
    let caseFolder = path.resolve(__dirname, `../cases`);
    let caseFiles = readFolder(caseFolder);
    let caseConfig = caseFiles.filter((item) => {
        return item.endsWith('case.json');
    });
    caseConfig.forEach((item) => {
        let config = require(item);
        let caseFolder = path.normalize(item + "/..");
        let indexJsPath = `${caseFolder}/index.js`;
        if (fs.existsSync(indexJsPath)) {
            caseDict[config.name] = require(indexJsPath);
        } else {
            let firstJsPath = readFolder(caseFolder).filter((path) => {
                return path.endsWith('.js');
            });
            if (firstJsPath.length > 0) {
                caseDict[config.name] = require(firstJsPath[0]);
            }
        }
    });
};

let getCase = function(caseName) {
    return caseDict[caseName];
};

const readFolder = (p, a = []) => {
    if (fs.statSync(p).isDirectory())
        fs.readdirSync(p).map(f => readFolder(a[a.push(path.join(p, f)) - 1], a))
    return a;
};

exports.loadCase = loadCase;
exports.getCase = getCase;