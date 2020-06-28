import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'

class ProductService {
    constructor() {
        this.api = create({
            //baseURL: 'https://5ea1a14db9f5ca00166c1f27.mockapi.io/api/'
            baseURL: 'https://9ba0cd3ggi.execute-api.ap-south-1.amazonaws.com/ecommerce/'
        })
    }

    getProductListAPI(limit, offset) {
        return networkCallWithApisauce(
            this.api,
            `products?limit=${limit}&offset=${offset}`, {},
            apiMethods.get
        )
    }
}

export default ProductService
/*
'v1/products/'*/
