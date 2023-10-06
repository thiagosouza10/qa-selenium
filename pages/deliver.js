const { By, Key, until } = require('selenium-webdriver')

class DeliverPage {

  constructor(driver) {
    this.driver = driver
    this.txtTituloPagina = By.css('main > h1')
    this.txtTituloDeliver= By.css('form > h1')

  }

  async acessarSite(url) {
    await this.driver.get(url)
  }
}

module.exports = DeliverPage