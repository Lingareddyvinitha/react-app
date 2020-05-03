import React from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { FiShoppingCart } from 'react-icons/fi'
import { SidePanel, Element, Container, Cart, Display, Group, NoOfProductsInCart, Close, InSideCart, Header, Wrapper } from '../../styledComponents/ProductCartStyles'
import CartList from '../CartList'
import SubTotal from '../SubTotal'
import CheckoutButton from '../CheckoutButton'
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
        return (
            <Container shouldDisplayCart={this.shouldDisplayCart}>
            {this.shouldDisplayCart === true ? 
            <Display>
            <Close onClick={this.hideCart}>X</Close>
            <Header>
            <Wrapper>
            <Cart onClick={this.showCart}><FiShoppingCart/></Cart>
            <NoOfProductsInCart>{this.getCartStore().noOfProductsInCart}</NoOfProductsInCart>
            </Wrapper>
            </Header>
            <CartList 
            cartProductList={this.getCartStore().cartProductList}
            onRemoveCartItem={this.getCartStore().onRemoveCartItem}
            noOfProductsInCart={this.getCartStore().noOfProductsInCart}/>
            <SubTotal totalCartAmount={this.getCartStore().totalCartAmount}/>
            <CheckoutButton totalCartAmount={this.getCartStore().totalCartAmount}
            clearCart={this.getCartStore().clearCart}/>
            </Display>
            :
            <Group>
            <Cart onClick={this.showCart}><FiShoppingCart/></Cart>
            <NoOfProductsInCart>{this.getCartStore().noOfProductsInCart}</NoOfProductsInCart>
            </Group>
            }
            
            </Container>


        )
    }
}

export default ProductCart
/*
<Close onClick={this.hideCart}>X</Close>*/
