//Cart Page

const puppeteer = require('puppeteer');
const getAbsoluteUrl = require('../../utils/helper.js').getAbsoluteUrl;

let run = async function(context) {
	let config = context.config;
    let page = await context.getCurrentPage();
    await page.hover(config.selector.minicartIcon);
    await page.waitForSelector(config.selector.minicartMenu, {visible: true, timeout: 30000});
    await page.click(config.selector.checkoutButton);
    await page.waitForNavigation();
};

exports.run = run;