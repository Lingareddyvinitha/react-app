import React from 'react'
import { Container, Image, Title, Price, InstallMentCalculation, AddToCart } from '../../styledComponents/ProductStyles'
import { observer, inject } from 'mobx-react'
//import cartStore from '../../stores/CartStore'
//const cartStore1 = new cartStore()
@inject('cartStore')
@observer
class Product extends React.Component {
    getCartStore = () => {
        return this.props.cartStore
    }
    onClickAddToCart = () => {
        const { product } = this.props
        const { onClickAddToCart, cartProductList } = this.getCartStore()
        onClickAddToCart(product)
    }
    render() {
        const { product } = this.props
        return (
            <Container>
            <Image src={product.imageURL} alt="product-image"></Image>
            <Title>{product.title}</Title>
            <Price>{product.price}</Price>
            <InstallMentCalculation>{product.installmentsCount}</InstallMentCalculation>
            <AddToCart onClick={this.onClickAddToCart}>Add to cart</AddToCart>
            </Container>
        )
    }

}

export default Product
