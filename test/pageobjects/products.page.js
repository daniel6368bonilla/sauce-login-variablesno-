import { $ } from '@wdio/globals'
import Page from './page.js';

class products extends Page {
    async addToCart(productName) {
       const formatName= productName.toLowerCase().replaceAll(" ","-")
        await $(`#add-to-cart-${formatName}`).click()
    }
    get shoppingCart (){
        return $('.shopping_cart_badge')
    }
}
export default new products();