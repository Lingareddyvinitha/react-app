import { observable, action, computed } from 'mobx'
import CartModel from './models/CartModel'
import stores from '../../../stores'

class CartStore {
    @observable cartProductList
    constructor() {
        this.init()
        this.productStore = []

    }
    @action.bound
    init() {
        this.cartProductList = []
    }
    @action.bound
    onClickAddToCart(product) {
        let cartProducts = [...this.cartProductList]
        this.productStore = stores.productStore
        this.totalCartAmount
        this.noOfProductsInCart
        let isItemInCart = this.cartProductList.find(cartProduct => cartProduct.productId === product.productId)
        if (isItemInCart === undefined) {
            const cartModel = new CartModel(product)
            cartProducts.push(cartModel)
        }
        else {
            isItemInCart.incrementQuantity()
        }
        this.cartProductList = cartProducts
        console.log(this.cartProductList)
    }

    @action.bound
    onRemoveCartItem(cartId) {
        this.cartProductList = this.cartProductList.filter(cartProduct => cartProduct.cartItemId !== cartId)
    }

    @action.bound
    clearCart() {
        this.init()

    }

    @action.bound
    getProductDetailsById() {

    }

    @computed get totalCartAmount() {
        this.cartProductList.map()

    }

    @computed get noOfProductsInCart() {}
}
//const cartStore = new CartStore()
export default CartStore
