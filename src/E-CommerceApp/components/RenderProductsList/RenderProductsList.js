import React from 'react'
import { observer, inject } from 'mobx-react'
import ProductList from '../ProductList'

@inject('productStore')
@observer
class RenderProductList extends React.Component {
    render() {
        const products = this.props.productStore.sortedAndFilteredProducts
        return (
            <ProductList products={products} onClickAddToCart={products.onClickAddToCart}/>
        )
    }
}

export default RenderProductList
