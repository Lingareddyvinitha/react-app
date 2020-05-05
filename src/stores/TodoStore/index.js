import { observable, action, computed, reaction, autorun } from 'mobx'
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import TodoModel from './models/TodoModel'
class TodoStore {
    @observable getTodoApiStatus
    @observable getTodoApiError
    @observable todosfromSource
    @observable todos
    @observable selectedFilter
    constructor(todoService) {
        this.todoService = todoService
        this.init()
    }

    @action.bound
    init() {
        this.getTodoApiStatus = API_INITIAL
        this.todos = []
        this.selectedFilter = "ALL"
    }

    @action.bound
    getTodosAPI() {
        const todosAPI = this.todoService.getTodosAPI()
        return bindPromiseWithOnSuccess(todosAPI)
            .to(this.setTodoApiStatus, this.setTodoApiResponse)
            .catch(this.setTodoApiError)
    }

    @action.bound
    setTodoApiStatus(apiStatus) {
        this.getTodoApiStatus = apiStatus
    }

    @action.bound
    setTodoApiResponse(todosResponse) {
        this.todosfromSource = todosResponse
        this.todosfromSource.map(todo => this.onAddTodo(todo))
    }

    @action.bound
    setTodoApiError(error) {
        this.getTodoApiError = error
    }

    @action.bound
    onAddTodo(todo) {
        const todoObject = {
            id: todo.id,
            title: todo.title,
            isCompleted: todo.completed
        }
        const todoModel = new TodoModel(todoObject);
        this.todos.push(todoModel);
        this.selectedFilter = "ALL"


    }
    @action.bound
    onRemoveTodo(idOfRemoveTodo) {
        this.todos = this.todos.filter((todo) =>
            todo.id !== idOfRemoveTodo);
    }
    @action.bound
    onChangeSelectedFilter(state) {
        this.selectedFilter = state

    }
    @action.bound
    onClearCompleted() {
        this.todos = this.todos.filter(todo => !todo.isCompleted)
    }

    @computed get ActiveTodosCount() {
        return this.todos.filter(todo => !todo.isCompleted).length;


    }
    @computed get FilteredTodos() {
        if (this.selectedFilter === "ALL") {
            return this.todos
        }
        else if (this.selectedFilter === "ACTIVE") {
            return this.todos.filter(todo => !todo.isCompleted)
        }
        else {
            return this.todos.filter(todo => todo.isCompleted)
        }
    }

    @computed get todosLength() {
        return this.todos.filter(todo => todo).length
    }
    /*
    todoSuccessReaction = reaction(
        () => { return this.ActiveTodosCount },
        (length) => {
            if (length === 0) {
                alert("all Completed")
            }
        }, { delay: 500 }
    )*/




    @action.bound
    clearStore() {
        this.init()
        this.todoSuccessReaction()
    }
}

export default TodoStore
