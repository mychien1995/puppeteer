//Login

const puppeteer = require('puppeteer');

let run = async function(context) {
    let loginPageUrl = context.config.loginPageUrl;
    let page = await context.getCurrentPage();
    return page.goto(loginPageUrl);
};

exports.run = run;