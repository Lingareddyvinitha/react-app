import { observable, action, computed, reaction, toJS } from 'mobx';


import TodoModel from './TodoModel'


class TodoAppStore {

    @observable todos = [];
    @observable selectedFilter;
    constructor() {
        this.selectedFilter = "ALL";

    }
    @action.bound
    onAddTodo(title) {
        const todoObject = {
            id: Math.floor(Math.random() * 100),
            title,
            isCompleted: false
        }
        const todoModel = new TodoModel(todoObject);
        this.todos.push(todoModel);
        this.selectedFilter = "ALL"

    }
    @action.bound
    onRemoveTodo(idOfRemoveTodo) {
        this.todos = this.todos.filter((todo) =>
            todo.id != idOfRemoveTodo
        );
    }
    @action.bound
    onChangeSelectedFilter(state) {
        this.selectedFilter = state

    }
    @action.bound
    onClearCompleted() {
        this.todos = this.todos.filter(todo => !todo.isCompleted)
    }
    todoReaction = reaction(
        () => { return toJS(this.todos).length },
        (length) => alert(length))

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

    todoSuccessReaction = reaction(
        () => { return this.ActiveTodosCount },
        (length) => {
            if (length === 0) {
                alert("all Completed")
                //reaction.dispose()
                //this.todoSuccessReaction()
            }
        }, { delay: 500 }
    )

}

const todoAppStore = new TodoAppStore()
export default todoAppStore;
