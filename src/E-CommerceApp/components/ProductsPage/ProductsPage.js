import React from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter, Redirect } from "react-router-dom";
import { Container, Group, SignOut, Top, Right, Left } from '../../styledComponents/ProductsPageStyles'
import LoadingWrapperWithFailure from '../../../common/LoadingWrapperWithFailure'
import NoDataView from '../../../common/NoDataView'
import Header from '../Header'
import SizeFilter from '../SizeFilter'
//import RenderProductList from '../RenderProductsList'
import ProductCart from '../ProductCart'
import { clearUserSession, getAccessToken } from '../../utils/StorageUtils'
import CookieConsent, { Cookies } from "react-cookie-consent";
import Toastify from '../Toastify'
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
        clearUserSession()
        //return <Redirect
        //to={{pathname:'/todo-page'}}/>
        const { history } = this.props
        history.replace({ pathname: '/sign-in-page' })
    }

    renderProductList = observer(() => {
        const products = this.getProductStore().sortedAndFilteredProducts
        if (this.getProductStore().sortedAndFilteredProducts.length === 0) {
            return <NoDataView/>
        }
        else {
            return (
                <ProductList products={products} onClickAddToCart={products.onClickAddToCart}/>
                //<RenderProductList products={products} onClickAddToCart={products.onClickAddToCart}/>
            )
        }


    })

    render() {
        const { getProductListAPIStatus, getProductListAPIError } = this.getProductStore()
        console.log("con", this.getProductStore().availableSizes)
        return (
            <Container>
            <Top>
            <SignOut onClick={this.onClickSignOut}>Sign Out</SignOut>
            <ProductCart />
            </Top>
            <Group>
            <Right>
            <SizeFilter onSelectSize={this.getProductStore().onSelectSize}
            availableSizes={this.getProductStore().availableSizes}
            />
            </Right>
            <Left>
            <Header 
            productCount={this.getProductStore().totalNoOfProductsDisplayed}
            onSelectSortBy={this.getProductStore().onChangeSortBy}/>
            
            <LoadingWrapperWithFailure
            apiStatus={getProductListAPIStatus}
            apiError={getProductListAPIError}
            onRetryClick={this.doNetworkCalls}
            renderSuccessUI={this.renderProductList}
            />
            </Left>
            </Group>
            <CookieConsent
    location="bottom"
    buttonText="Accept!!"
    cookieName="myAwesomeCookieName2"
    style={{ background: "#2B373B" }}
    buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
    expires={150}
    >
    This website uses cookies to enhance the user experience.{" "}
    <span style={{ fontSize: "10px" }}>
    This bit of text is smaller :O
    </span>
</CookieConsent>
            <Toastify/>
            
            </Container>
        )
    }
}

export default withRouter(ProductsPage)
