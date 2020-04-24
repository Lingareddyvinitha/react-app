import { observable, action, computed, reaction, autorun } from 'mobx'
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import ProductModel from './models/ProductModel'
class ProductStore {
    @observable getProductListAPIStatus
    @observable getProductListAPIError
    @observable productList
    @observable sizeFilter
    @observable sortBy
    constructor(productsAPIService) {
        this.productsAPIService = productsAPIService
        this.productsFromSource = []
        this.init()
    }

    @action.bound
    init() {
        this.getProductListAPIStatus = API_INITIAL
        this.productList = []
        this.sortBy = "SELECT"
    }

    @action.bound
    getProductList() {
        const ProductListAPI = this.productsAPIService.getProductListAPI()
        return bindPromiseWithOnSuccess(ProductListAPI)
            .to(this.setGetProductListAPIStatus, this.setProductListResponse)
            .catch(this.setGetProductListAPIError)
    }

    @action.bound
    setGetProductListAPIStatus(apiStatus) {
        this.getProductListAPIStatus = apiStatus
    }

    @action.bound
    setProductListResponse(productListResponse) {
        this.productsFromSource = productListResponse
        this.productsFromSource.map(product => this.onAddProduct(product))
    }

    @action.bound
    setGetProductListAPIError(error) {
        this.getProductListAPIError = error
    }

    @action.bound
    onAddProduct(product) {
        const productObject = {
            productId: product.id,
            availableSizes: product.availableSizes,
            currencyFormat: product.currencyFormat,
            currencyId: product.currencyId,
            description: product.description,
            installmentsCount: product.installments,
            isFreeShipping: product.isFreeShipping,
            price: product.price,
            printStyle: product.style,
            title: product.title,
            imageURL: product.image
        }
        const productModel = new ProductModel(productObject);
        this.productList.push(productModel);
    }

    @action.bound
    onChangeSortBy(typeofSort) {
        this.sortBy = typeofSort
    }

    @action.bound
    onSelectSize() {
        return
    }

    @computed get product() {
        return
    }

    @computed get sortedAndFilteredProducts() {
        return
    }

    @computed get totalNoOfProductsDisplayed() {
        return
    }




    @action.bound
    clearStore() {
        this.init()
    }
}

export default ProductStore
