import { observable, action } from 'mobx';
class TodoModel {
    id;
    @observable title;
    @observable isCompleted;
    constructor(object) {
        this.title = object.title;
        this.isCompleted = object.isCompleted
        this.id = object.id
    }
    @action.bound
    onCompleteTodo(status) {
        this.isCompleted = status;
    }
    @action.bound
    onUpdateTodoTitle(updatedTitle) {
        this.title = updatedTitle;
    }
}


export default TodoModel;
