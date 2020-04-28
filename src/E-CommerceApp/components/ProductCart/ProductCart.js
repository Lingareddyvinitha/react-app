import React from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { SidePanel, Element, Container, Cart, Display } from '../../styledComponents/ProductCartStyles'
import CartList from '../CartList'
@inject('cartStore')
@observer
class ProductCart extends React.Component {
    @observable shouldDisplayCart
    constructor(props) {
        super(props)
        this.shouldDisplayCart = false
    }
    getCartStore = () => {
        return this.props.cartStore
    }
    showCart = () => {
        this.shouldDisplayCart = true

    }
    hideCart = () => {
        this.shouldDisplayCart = false
    }
    render() {
        console.log("display", this.getCartStore().cartProductList)
        return (
            <Container shouldDisplayCart={this.shouldDisplayCart}>
            {this.shouldDisplayCart === true ? 
            <Display>
            <button onClick={this.hideCart}>close</button>
            <CartList 
            cartProductList={this.getCartStore().cartProductList}
            onRemoveCartItem={this.getCartStore().onRemoveCartItem}/>
            </Display>
            :
            <button onClick={this.showCart}>open</button>}
            </Container>

        )
    }
}

export default ProductCart
