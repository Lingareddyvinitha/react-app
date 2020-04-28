import React from 'react'
import { Container, noOfProductsInCart } from '../../styledComponents/CartListStyles'
import CartItem from '../CartItem'
class CartList extends React.Component {
    renderCartList = () => {
        const { cartProductList, onRemoveCartItem } = this.props
        console.log("cartList", cartProductList)
        return cartProductList.map(cartProduct => <CartItem 
        cartItem={cartProduct}
        onRemoveCartItem={onRemoveCartItem}
        />)
    }
    render() {
        return (

            <Container>
            <noOfProductsInCart>
            0
            </noOfProductsInCart>
            {this.renderCartList()}
            </Container>
        )
    }
}
export default CartList
