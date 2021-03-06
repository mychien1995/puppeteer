//Home page

const puppeteer = require('puppeteer');
const getAbsoluteUrl = require('../../utils/helper.js').getAbsoluteUrl;

let run = async function(context) {
	let config = context.config;
    let homePageUrl = getAbsoluteUrl(context.config.baseUrl, context.config.homePageUrl);
    let page = await context.getCurrentPage();
    return page.goto(homePageUrl);
};

exports.run = run;