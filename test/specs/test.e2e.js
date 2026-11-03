import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'



describe('SauceDemo Login Test', () => {
    it('should login with valid credentials', async () => {
        for (let i=0; i< LoginPage.users.length; i++) {
        await LoginPage.open()
        await LoginPage.login(LoginPage.users[i], LoginPage.password)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        }
    })
})

