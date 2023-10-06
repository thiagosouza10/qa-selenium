const { By, Key, until } = require('selenium-webdriver')

class HomePage {

  constructor(driver) {
    this.driver = driver
    this.txtTituloPagina = By.css('main > h1')
    this.btnCadastro = By.css('a strong')
  }

  async acessarSite(url) {
    await this.driver.get(url)
  }
}

module.exports = HomePage