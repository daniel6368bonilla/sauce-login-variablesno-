import { $ } from '@wdio/globals'
import Page from './page.js';

class products extends Page {
    async addToCart(productName) {
        await $(`#add-to-cart-${productName}`).click()
    }
    get shoppingCart (){
        return $('.shopping_cart_badge')
    }
}
export default new products();