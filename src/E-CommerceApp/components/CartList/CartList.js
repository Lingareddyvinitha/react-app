import React from 'react'
import { Container } from '../../styledComponents/CartListStyles'
import CartItem from '../CartItem'
class CartList extends React.Component {
    renderCartList = () => {
        const { cartProductList, onRemoveCartItem } = this.props
        console.log("cartList", cartProductList)
        return cartProductList.map(cartProduct => <CartItem key={cartProduct.cartItemId}
        cartItem={cartProduct}
        onRemoveCartItem={onRemoveCartItem}
        />)
    }
    render() {
        return (
            <Container>
            {this.renderCartList()}
            
            </Container>
        )
    }
}
export default CartList
