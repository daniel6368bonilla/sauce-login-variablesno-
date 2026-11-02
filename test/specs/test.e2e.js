import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import loginPage from '../pageobjects/login.page.js'


describe('SauceDemo Login Test', () => {
    it('should login with valid credentials', async () => {
       await browser.url('https://www.saucedemo.com/')

        await LoginPage.login(LoginPage.username, LoginPage.password)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
      
    })
})

