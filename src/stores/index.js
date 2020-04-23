import UserService from '../services/UserServices/index.api'
import TodoService from '../services/TodoServices/index.fixture'
import CounterStore from './CounterStore'
import UserStore from './UserStore'
import TodoStore from './TodoStore'


const counterStore = new CounterStore()
const userService = new UserService()
const userStore = new UserStore(userService)
const todoService = new TodoService()
const todoStore = new TodoStore(todoService)

export default {
    counterStore,
    userStore,
    todoStore,
}
