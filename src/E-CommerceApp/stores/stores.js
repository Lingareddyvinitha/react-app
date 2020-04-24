import ProductService from '../services/ProductService/'
import ProductStore from './ProductStore'



const productService = new ProductService()
const productStore = new ProductStore(productService)

export default {
    productStore,
}
