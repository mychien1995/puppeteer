//Add To Cart

const puppeteer = require('puppeteer');
const getAbsoluteUrl = require('../../utils/helper.js').getAbsoluteUrl;

let run = async function(context) {
    let config = context.config;
    let page = await context.getCurrentPage();
    let productPageUrl = getAbsoluteUrl(config.baseUrl, config.addToCart.productPageUrl);
    await page.goto(productPageUrl);
    await page.waitForSelector(config.addToCart.selector.addToCartBtn, { visible: true, timeout: 30000 });
    // page.on('response', async (response) => {
    //     if (response._url.indexOf('AddCartLine') > -1) {
    //         let json = await response.json();
    //         if (json.HasErrors) {
    //             throw 'Add Cart Line failed';
    //         }
    //     }
    // });
    await page.click(config.addToCart.selector.addToCartBtn);
};

exports.run = run;