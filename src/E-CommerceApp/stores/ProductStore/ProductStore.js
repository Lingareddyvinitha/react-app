import { observable, action, computed, reaction, autorun } from 'mobx'
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import ProductModel from './models/ProductModel'
import CartStore from '../CartStore'
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
        this.sizeFilter = []
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
    onSelectSize(size, isClicked) {
        if (isClicked) {
            this.sizeFilter.push(size)
        }
        else {
            this.sizeFilter.remove(size)
        }
        console.log("filter", this.sizeFilter)
    }

    @computed get product() {
        let products = [];
        if (this.sizeFilter.length === 0) {
            products = [...this.productList]
        }
        else {
            this.sizeFilter.forEach(size => {
                this.productList.forEach(product => {
                    if (product.availableSizes.includes(size)) {
                        if (products.indexOf(product) === -1) {
                            products = [...products, product]
                        }
                    }

                })
            })
        }
        switch (this.sortBy) {
            case 'ASCENDING':
                return products.sort((a, b) => (a.price - b.price))
            case 'DESCENDING':
                return products.sort((a, b) => (b.price - a.price))
            default:
                return products


        }
    }

    @computed get sortedAndFilteredProducts() {
        return this.product
    }

    @computed get totalNoOfProductsDisplayed() {
        return this.sortedAndFilteredProducts.length
    }

    @computed get availableSizes() {
        let availableSizes = []
        let availableSizesObj = []
        this.productList.forEach(product => {
            product.availableSizes.forEach(size => {
                if (availableSizes.indexOf(size) === -1) {
                    let sizeObject = {
                        size,
                        id: Math.random().toString()
                    }
                    availableSizes.push(size)
                    availableSizesObj.push(sizeObject)
                }
            })
        })
        return availableSizesObj
    }




    @action.bound
    clearStore() {
        this.init()
    }
}

export default ProductStore
