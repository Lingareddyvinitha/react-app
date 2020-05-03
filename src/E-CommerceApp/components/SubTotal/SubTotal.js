import React from 'react'
import { Total, Label, Amount } from '../../styledComponents/SubTotalStyles'
class SubTotal extends React.Component {
    render() {
        const { totalCartAmount } = this.props
        return (
            <Total>
            <Label>SUBTOTAL:</Label>
            <Amount>₹{totalCartAmount}</Amount>
            </Total>
        )
    }
}

export default SubTotal
