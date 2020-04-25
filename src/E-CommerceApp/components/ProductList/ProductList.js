import React from 'react'
import { Container } from '../../styledComponents/ProductListStyles'
import { observer } from 'mobx-react'
import Product from '../Product'

@observer
class ProductList extends React.Component {
    renderProducts = () => {
        const { products, onClickAddToCart } = this.props
        return products.map(product =>
            <Product onClickAddToCart={onClickAddToCart} product={product}/>
        )
    }
    render() {
        return (
            <Container>
            { this.renderProducts() }
            </Container>
        )
    }

}

export default ProductList
