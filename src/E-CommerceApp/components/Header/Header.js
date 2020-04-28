import React from 'react'
import { Container, NoOfProducts } from '../../styledComponents/HeaderStyles'
import { observer } from 'mobx-react'
import ProductSort from '../ProductSort'
@observer
class Header extends React.Component {
    render() {
        const { productCount, onSelectSortBy } = this.props
        return (
            <Container>
            <NoOfProducts>{productCount}Products(s) found</NoOfProducts>
            <ProductSort onSelectSortBy={onSelectSortBy}/>
            </Container>
        )
    }

}

export default Header
