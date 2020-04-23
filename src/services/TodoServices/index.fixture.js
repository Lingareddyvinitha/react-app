import todosResponse from '../../fixtures/getTodosResponse.json'
class TodoFixtureService {

    getTodosAPI() {
        return new Promise((resolve, reject) => {
            resolve(todosResponse)
        })
    }

}

export default TodoFixtureService
