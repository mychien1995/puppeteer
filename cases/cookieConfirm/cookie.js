//Cookie
const { PendingXHR } = require('pending-xhr-puppeteer');

const puppeteer = require('puppeteer');
const getAbsoluteUrl = require('../../utils/helper.js').getAbsoluteUrl;

let run = async function(context) {
    let config = context.config;
    let page = await context.getCurrentPage();
    await page.waitForSelector(config.cookie.selector.submit, {visible: true, timeout: 30000});
    await page.click(config.cookie.selector.submit);
};

exports.run = run;