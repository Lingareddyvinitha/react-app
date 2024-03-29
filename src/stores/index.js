import UserService from '../services/UserServices/index.api'
import TodoService from '../services/TodoServices/index.fixture'
import CounterStore from './CounterStore'
import UserStore from './UserStore'
import TodoStore from './TodoStore'
import LoginStore from './LoginStore'
import AuthStore from '../Authentication/stores/AuthStore'
import AuthService from '../Authentication/services/Authentication'
//import { ProductStore } from '../E-CommerceApp/stores/ProductStore/ProductStore.js'
//import ProductService from '../E-CommerceApp/services/ProductService'
//import CartStore from '../E-CommerceApp/stores/CartStore'


const counterStore = new CounterStore()
const userService = new UserService()
const userStore = new UserStore(userService)
const todoService = new TodoService()
const todoStore = new TodoStore(todoService)
const loginStore = new LoginStore()
const authService = new AuthService()
const authStore = new AuthStore(authService)
//const productService = new ProductService()
//const productStore = new ProductStore(productService)
//const cartStore = new CartStore();

export default {
    counterStore,
    userStore,
    todoStore,
    loginStore,
    authStore,
    //productStore,
    //cartStore
}
