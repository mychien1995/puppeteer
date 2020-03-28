const puppeteer = require('puppeteer');

let run = function(context) {
	let homePageUrl = context.config.homePageUrl;
    (async () => {
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto(homePageUrl);
        await browser.close();
    })();
};

exports.run = run;