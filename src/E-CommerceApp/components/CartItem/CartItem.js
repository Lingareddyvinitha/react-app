import React from 'react'
import { observer } from 'mobx-react'
import { Container, Group, Image, Info, Amount, Title, Style, Quantity } from '../../styledComponents/CartItemStyles'


@observer
class CartItem extends React.Component {
    onRemoveCartItem = () => {
        const { onRemoveCartItem } = this.props
        onRemoveCartItem()
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
            <Amount>{cartItem.totalAmountOfPerticularItem}</Amount>
            </Group>
            </Container>
        )
    }
}
export default CartItem
