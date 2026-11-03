import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'



describe('SauceDemo Login Test', () => {
    it('should login with valid credentials', async () => {
        for (let i=0; i< LoginPage.credentials.users.length; i++) {
            console.log(`Testing user: ${LoginPage.credentials.users[i]}`)
        await LoginPage.open()
        await LoginPage.login(LoginPage.credentials.users[i], LoginPage.credentials.password)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        }
    })
})

