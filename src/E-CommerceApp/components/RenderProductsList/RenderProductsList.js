import React from 'react'
import { observer, inject } from 'mobx-react'
import ProductList from '../ProductList'

@inject('productStore')
@observer
class RenderProductList extends React.Component {
    render() {
        const { products, onClickAddToCart } = this.props
        return (
            <ProductList products={products} onClickAddToCart={onClickAddToCart}/>
        )
    }
}

export default RenderProductList
