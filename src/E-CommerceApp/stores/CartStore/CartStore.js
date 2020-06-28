import { observable, action, computed } from 'mobx'
import CartModel from './models/CartModel'
import stores from '../'

class CartStore {
    @observable cartProductList
    constructor(productStore) {
        this.init()
        this.productStore = productStore

    }
    @action.bound
    init() {
        this.cartProductList = []
    }
    @action.bound
    onClickAddToCart(product) {
        let cartProducts = [...this.cartProductList]
        this.totalCartAmount
        this.noOfProductsInCart
        let isItemInCart = this.cartProductList.find(cartProduct => cartProduct.productId === product.productId)
        //console.log("id", this.cartProductList[0].id)
        if (isItemInCart === undefined) {
            const cartModel = new CartModel(product)
            cartProducts.push(cartModel)
        }
        else {
            isItemInCart.incrementQuantity()
        }
        this.cartProductList = cartProducts
    }

    @action.bound
    onRemoveCartItem(id) {
        this.cartProductList = this.cartProductList.filter(cartProduct => cartProduct.id !== id)
        //console.log('-->', this.cartProductList[0].id)
    }

    @action.bound
    clearCart() {
        this.init()

    }

    @computed get totalCartAmount() {
        let totalCartAmount = 0
        this.cartProductList.map(cartProduct =>
            totalCartAmount = totalCartAmount + (cartProduct.quantity * cartProduct.price))
        return parseFloat(totalCartAmount).toFixed(2)
    }


    @computed get noOfProductsInCart() {
        let noOfProductsInCart = 0
        this.cartProductList.map(cartProduct =>
            noOfProductsInCart = noOfProductsInCart + (cartProduct.quantity)
        )
        return noOfProductsInCart

    }
}
//const cartStore = new CartStore()
export default CartStore
