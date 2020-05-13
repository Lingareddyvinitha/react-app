import React from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter, Redirect } from "react-router-dom";
import { clearUserSession, getAccessToken } from '../../utils/StorageUtils'
import NoDataView from '../../../common/NoDataView'
import ProductsPage from '../../components/ProductsPage'
@inject('productStore', 'authStore')
@observer
class ProductsPageRoute extends React.Component {
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
        console.log("signOutButton")
        clearUserSession()
        const { history } = this.props
        history.replace({ pathname: '/sign-in-page' })
    }

    render() {
        const { getProductListAPIStatus, getProductListAPIError } = this.getProductStore()
        return (
            <ProductsPage
            onClickSignOut={this.onClickSignOut}
            onSelectSize={this.getProductStore().onSelectSize}
            availableSizes={this.getProductStore().availableSizes}
            totalNoOfProductsDisplayed={this.getProductStore().totalNoOfProductsDisplayed}
            onChangeSortBy={this.getProductStore().onChangeSortBy}
            getProductListAPIStatus={getProductListAPIStatus}
            getProductListAPIError={getProductListAPIError}
            doNetworkCalls={this.doNetworkCalls}
            sortedAndFilteredProducts={this.getProductStore().sortedAndFilteredProducts}
            />
        )
    }
}
export default withRouter(ProductsPageRoute)
