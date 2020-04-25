import React from 'react'
import { Container, Image, Title, Price, InstallMentCalculation, AddToCart } from '../../styledComponents/ProductStyles'
import { observer } from 'mobx-react'

@observer
class Product extends React.Component {
    onClickAddToCart = () => {
        const { onClickAddToCart } = this.props
        onClickAddToCart()
    }
    render() {
        const { product } = this.props
        return (
            <Container>
            <Image></Image>
            <Title></Title>
            <Price></Price>
            <InstallMentCalculation></InstallMentCalculation>
            <AddToCart></AddToCart>
            </Container>
        )
    }

}

export default Product
