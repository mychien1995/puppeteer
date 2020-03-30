//Home page

const puppeteer = require('puppeteer');

let run = async function(context) {
    let homePageUrl = context.config.homePageUrl;
    let page = await context.getCurrentPage();
    return page.goto(homePageUrl);
};

exports.run = run;