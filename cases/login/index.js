//Login

const puppeteer = require('puppeteer');
const getAbsoluteUrl = require('../../utils/helper.js').getAbsoluteUrl;

let run = async function(context) {
	let config = context.config;
    let loginPageUrl = getAbsoluteUrl(config.baseUrl, config.login.url);
    let page = await context.getCurrentPage();
    await page.goto(loginPageUrl);
    await page.waitFor(1000);
    await page.type(config.login.selector.username, config.login.credential.username);
    await page.type(config.login.selector.password, config.login.credential.password);
    await page.waitForSelector(config.login.selector.submit, {visible: true, timeout: 30000});
    await page.waitFor(500);
  	await page.click(config.login.selector.submit);
  	return await page.waitForNavigation();
};

exports.run = run;