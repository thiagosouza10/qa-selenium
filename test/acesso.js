const {By, Builder, until} = require('selenium-webdriver')
const GerenciarDriver = require('../utils/gerenciarDriver')
const assert = require('assert')
const config = require('../utils/config')
const HomePage = require('../pages/home')
const DeliverPage = require('../pages/deliver')


describe('Acesso aplicação Buger Eats', function () {
    this.timeout(config.timeout)

    it('Deve acessar aplicação Buger Eats', async function () {
        let _driver
        _driver = await GerenciarDriver.instanciarDriver()
        const _HomePage = new HomePage(_driver)
        _HomePage.acessarSite(config.baseUrl)
        
        let _mensagem = await _driver.wait(until.elementLocated(_HomePage.txtTituloPagina))
        //Asserção
        let _validaMensagem = await _mensagem.getText()
        assert.equal(_validaMensagem, 'Seja um parceiro entregador pela Buger Eats')
    });

    it('Deve validar texto do botão de acesso ao cadastro', async function () {
        let _driver
        _driver = await GerenciarDriver.instanciarDriver()
        const _HomePage = new HomePage(_driver)
        const _DeliverPage = new DeliverPage(_driver)
        _HomePage.acessarSite(config.baseUrl)
        
        let _elBotaoCadastro = await _driver.wait(until.elementLocated(_HomePage.btnCadastro))
        //Asserção
        let _validaMensagem = await _elBotaoCadastro.getText()
        assert.equal(_validaMensagem, 'Cadastre-se para fazer entregas')
        await _elBotaoCadastro.click()
        await _driver.wait(until.elementLocated(_DeliverPage.txtTituloDeliver))
        await _driver.quit()
    });

});