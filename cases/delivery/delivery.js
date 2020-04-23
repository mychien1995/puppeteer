//Delivery Page
const { PendingXHR } = require('pending-xhr-puppeteer');

const puppeteer = require('puppeteer');
const getAbsoluteUrl = require('../../utils/helper.js').getAbsoluteUrl;

let run = async function(context) {
    let config = context.config;
    let deliveryConfig = config.delivery;
    let page = await context.getCurrentPage();
    let pendingXHR = new PendingXHR(page);
    await pendingXHR.waitForAllXhrFinished();
    await page.select(deliveryConfig.selector.deliveryOptions, deliveryConfig.deliveryOption);
    pendingXHR = new PendingXHR(page);
    await pendingXHR.waitForAllXhrFinished();
    await page.type(deliveryConfig.selector.addressName, deliveryConfig.addressName);
    await page.type(deliveryConfig.selector.city, deliveryConfig.city);
    await page.type(deliveryConfig.selector.state, deliveryConfig.state);
    await page.type(deliveryConfig.selector.address, deliveryConfig.address);
    await page.type(deliveryConfig.selector.zipCode, deliveryConfig.zipCode);
    await page.select(deliveryConfig.selector.country, deliveryConfig.country);
    await page.click(deliveryConfig.selector.shippingOptionBtn);
    pendingXHR = new PendingXHR(page);
    await pendingXHR.waitForAllXhrFinished();
    let shippingOptionSelector = deliveryConfig.selector.shippingOption;
    let shippingOptionNumber = deliveryConfig.selector.shippingOptionNumber;
    await page.waitFor(1000);
    await page.evaluate((shippingOptionSelector, shippingOptionNumber) => {
        document.querySelectorAll(shippingOptionSelector)[shippingOptionNumber].click();
    }, shippingOptionSelector, shippingOptionNumber);
    await page.waitFor(1000);
    await Promise.all([
        page.click(deliveryConfig.selector.billingBtn),
        page.waitForNavigation({
            waitUntil: 'networkidle0',
        }),
    ]);
};

exports.run = run;