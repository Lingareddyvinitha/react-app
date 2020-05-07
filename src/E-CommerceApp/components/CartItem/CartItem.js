import React from 'react'
import { observer } from 'mobx-react'
import { Container, Group, Image, Info, Amount, Title, Style, Quantity, Delete, Wrapper } from '../../styledComponents/CartItemStyles'


@observer
class CartItem extends React.Component {
    onRemoveCartItem = () => {
        const { onRemoveCartItem, cartItem } = this.props
        onRemoveCartItem(cartItem.productId)
    }
    render() {
        const { cartItem } = this.props
        return (
            <Container>
            <Group>
            <Image src={cartItem.imageURL}></Image>
            <Info>
            <Title>{cartItem.title}</Title>
            <Style>{cartItem.printStyle}</Style>
            <Quantity>{cartItem.quantity}</Quantity>
            </Info>
            <Wrapper>
            <Delete onClick={this.onRemoveCartItem}>x</Delete>
            <Amount>{cartItem.currencyFormat}{cartItem.totalAmountOfPerticularItem}</Amount>
            </Wrapper>
            </Group>
            </Container>
        )
    }
}
export default CartItem
