import React from 'react'
import { Checkout, Container } from '../../styledComponents/CheckoutButtonStyles'
class CheckoutButton extends React.Component {
    clearCart = () => {
        alert("Thank you for shopping with us")
        const { clearCart } = this.props
        clearCart()
    }
    render() {
        const { totalCartAmount } = this.props
        return (
            <Container>
            <Checkout onClick={this.clearCart} 
            disabled={(totalCartAmount==="0.00")?true:false}>CheckoutButton
            </Checkout>
            </Container>
        )
    }
}

export default CheckoutButton
