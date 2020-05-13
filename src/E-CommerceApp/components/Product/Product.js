import React from 'react'
import {
    Container,
    Image,
    Title,
    Price,
    InstallMentCalculation,
    AddToCart,
    Group,
    FreeShipping,
    DecimalPart,
    NumberPart
}
from '../../styledComponents/ProductStyles'
import { observer, inject } from 'mobx-react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
@inject('cartStore')
@observer
class Product extends React.Component {
    getCartStore = () => {
        return this.props.cartStore
    }

    handleToast = () => {
        toast.warn("Product is added to cart", {
            position: toast.POSITION.BOTTOM_CENTER,
            hideProgressBar: true,
            closeButton: false
        })
    }

    onClickAddToCart = () => {
        const { product } = this.props
        const { onClickAddToCart } = this.getCartStore()
        onClickAddToCart(product)
        this.handleToast()
    }
    render() {
        const { product } = this.props
        const installmentCalculation = (product.price / product.installmentsCount).toFixed(2)
        return (
            <Container>
            <Group>
            <Image src={product.imageURL} alt="product-image"></Image>
            <FreeShipping>{(product.isFreeShipping)?"Free Shipping":""}</FreeShipping>
            </Group>
            <Title>{product.title}</Title>
            <Price>{product.currencyFormat}
            <NumberPart>{product.price.toFixed(2).toString().slice(0, -2)}</NumberPart>
            <DecimalPart>{product.price.toFixed(2).toString().slice(-2)}
            </DecimalPart>
            </Price>
            <InstallMentCalculation>or{product.installmentsCount} x {installmentCalculation}</InstallMentCalculation>
            <AddToCart onClick={this.onClickAddToCart}>Add to cart</AddToCart>
            </Container>
        )
    }

}

export default Product
