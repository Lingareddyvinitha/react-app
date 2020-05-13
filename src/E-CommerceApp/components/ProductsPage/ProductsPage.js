import React from 'react'
import { observer } from 'mobx-react'
import { Container, Group, SignOut, Top, Right, Left } from '../../styledComponents/ProductsPageStyles'
import LoadingWrapperWithFailure from '../../../common/LoadingWrapperWithFailure'
import NoDataView from '../../../common/NoDataView'
import Header from '../Header'
import SizeFilter from '../SizeFilter'
import ProductCart from '../ProductCart'
import CookieConsent, { Cookies } from "react-cookie-consent";
import Toastify from '../Toastify'
import ProductList from '../ProductList'

@observer
class ProductsPage extends React.Component {

    renderProductList = observer(() => {
        const { sortedAndFilteredProducts } = this.props
        if (sortedAndFilteredProducts.length === 0) {
            return <NoDataView/>
        }
        else {
            return (
                <ProductList products={sortedAndFilteredProducts} onClickAddToCart={sortedAndFilteredProducts.onClickAddToCart}/>

            )
        }


    })

    render() {
        const {
            getProductListAPIStatus,
            getProductListAPIError,
            onClickSignOut,
            onSelectSize,
            availableSizes,
            totalNoOfProductsDisplayed,
            onChangeSortBy,
            doNetworkCalls,
            sortedAndFilteredProducts,

        } = this.props
        return (
            <Container  data-testid="ProductsPage-render">
            <Top>
            <SignOut onClick={onClickSignOut}>Sign Out</SignOut>
            <ProductCart />
            </Top>
            <Group>
            <Right>
            <SizeFilter onSelectSize={onSelectSize}
            availableSizes={availableSizes}
            />
            </Right>
            <Left>
            <Header 
            productCount={totalNoOfProductsDisplayed}
            onSelectSortBy={onChangeSortBy}/>
            
            <LoadingWrapperWithFailure
            apiStatus={getProductListAPIStatus}
            apiError={getProductListAPIError}
            onRetryClick={doNetworkCalls}
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

export default ProductsPage
