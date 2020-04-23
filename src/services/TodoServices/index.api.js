import { create } from 'apisauce'
import { networkCallWithApisauce } from '../../utils/APIUtils'
import { apiMethods } from '../../constants/APIConstants'

class TodoService {
    constructor() {
        this.api = create({
            baseURL: 'https://jsonplaceholder.typicode.com/'
        })
    }

    getTodosAPI() {
        return networkCallWithApisauce(
            this.api,
            'todos/', {},
            apiMethods.get
        )
    }
}

export default TodoService
