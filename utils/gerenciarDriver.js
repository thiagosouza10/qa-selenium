const { Builder } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome')
const config = require('./config')

class GerenciarDriver {
    
    static async instanciarDriver() {
        if (!GerenciarDriver.driver) {
            const options = new chrome.Options()
            if (config.headless) {
                options.headless()
            }

            GerenciarDriver.driver = new Builder()
                .forBrowser(config.browser)
                .setChromeOptions(options)
                .build()
        }
        return GerenciarDriver.driver
    }
}

module.exports = GerenciarDriver