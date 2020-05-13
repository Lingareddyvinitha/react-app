import ProductService from '../services/ProductService/'
import { ProductStore } from './ProductStore'
import CartStore from './CartStore'
//import AuthStore from '../../Authentication/stores/AuthStore'
//import AuthService from '../Authentication/services/Authentication'



const productService = new ProductService()
const productStore = new ProductStore(productService)
const cartStore = new CartStore(productStore);
//const authService = new AuthService()
//const authStore = new AuthStore(authService)

export default {
    productStore,
    cartStore,
    //authStore
}
