const puppeteer = require('puppeteer');

const Context = function(environment, config) {
    var self = this;
    self.environment = environment;
    self.config = config;
    self.data = {};

    self.getBrowser = async function() {
        var browser = self.data['browser'];
        if (!browser) {
            browser = await puppeteer.launch(config.launchSetting);
            self.data.browser = browser;
        }
        return browser;
    }

    self.getCurrentPage = async function() {
        var currentPage = self.data['currentPage'];
        if (!currentPage) {
            var browser = await self.getBrowser();
            currentPage = await browser.newPage();
            self.data.currentPage = currentPage;
        }
        return currentPage;
    }
}

exports.Context = Context;