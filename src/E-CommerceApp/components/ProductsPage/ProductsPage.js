import React from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter } from "react-router-dom";
import { Container, Group } from '../../styledComponents/ProductsPageStyles'
import LoadingWrapperWithFailure from '../../../common/LoadingWrapperWithFailure'
import Header from '../Header'
import SizeFilter from '../SizeFilter'
import ProductList from '../ProductList'

@inject('productStore', 'authStore')
@observer
class ProductsPage extends React.Component {
    componentDidMount() {
        this.doNetworkCalls()
    }

    componentWillUnmount() {
        this.getProductStore().clearStore()
    }

    getProductStore = () => {
        return this.props.productStore
    }

    getAuthStore = () => {
        return this.props.authStore
    }

    doNetworkCalls = () => {
        this.getProductStore().getProductList()
    }

    onClickSignOut = () => {

    }

    renderProductList = () => {
        /*
        if (this.getProductStore().sortedAndFilteredProducts.length === 0) {
            return <NoDataView/>
        }
        else {
            return (
                <div>jhjfdf</div>
            )
        }*/
        return (
            <ProductList products={this.getProductStore().sortedAndFilteredProducts}/>
        )

    }

    render() {
        const { getProductListAPIStatus, getProductListAPIError } = this.getProductStore()
        console.log(this.getProductStore().sortedAndFilteredProducts)
        return (
            <Container>
            <SizeFilter onSelectSize={this.getProductStore().onSelectSize}/>
            <Group>
            <Header 
            productCount={this.getProductStore().totalNoOfProductsDisplayed}
            onSelectSortBy={this.getProductStore().onChangeSortBy}/>
            
            <LoadingWrapperWithFailure
            apiStatus={getProductListAPIStatus}
            apiError={getProductListAPIError}
            onRetryClick={this.doNetworkCalls}
            renderSuccessUI={this.renderProductList}
            />
            </Group>
            </Container>
        )
    }
}

export default withRouter(ProductsPage)
