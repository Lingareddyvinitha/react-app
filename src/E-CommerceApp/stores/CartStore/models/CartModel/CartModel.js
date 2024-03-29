import { observable, action, computed } from 'mobx'
class CartModel {
    id
    @observable productId
    @observable quantity
    constructor(cartItem) {
        const { productId: id } = cartItem
        console.log("vidisd", id)
        this.cartItemId = Math.random().toString()
        this.productId = cartItem.productId,
            this.availableSizes = cartItem.availableSizes,
            this.currencyFormat = cartItem.currencyFormat,
            this.currencyId = cartItem.currencyId,
            this.description = cartItem.description,
            this.installmentsCount = cartItem.installments,
            this.isFreeShipping = cartItem.isFreeShipping,
            this.price = cartItem.price,
            this.printStyle = cartItem.printStyle,
            this.title = cartItem.title,
            this.imageURL = cartItem.imageURL
        this.quantity = 1
    }


    @action.bound
    incrementQuantity() {
        this.quantity++
    }
    @computed get totalAmountOfPerticularItem() {
        const Amount = (this.quantity) * (this.price)
        return parseFloat(Amount).toFixed(2);
    }
}

export default CartModel
