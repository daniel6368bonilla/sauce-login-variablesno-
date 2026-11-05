import { browser, expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import products from '../pageobjects/products.page.js'


describe('SauceDemo Login Test', () => {
    it('should login with valid credentials', async () => {
        for (let i=0; i< LoginPage.credentials.users.length; i++) {
        await LoginPage.open()
        await LoginPage.login(LoginPage.credentials.users[i], LoginPage.credentials.password)
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        }
         await products.addToCart("sauce-labs-backpack")
         await expect (products.shoppingCart).toHaveText('1')
    })
    it('should not login with invalid credentials', async() => {
    for (let i=0; i< LoginPage.credentials.users.length; i++) {
        await LoginPage.open()
        await LoginPage.login(LoginPage.credentials.users[i], LoginPage.credentials.wrongPassword)
        await expect($('[data-test="error"]')).toBeDisplayed()
    }
 })
})

