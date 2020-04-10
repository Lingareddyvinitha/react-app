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
    onCompleteTodo(status) {
        this.isCompleted = status;
    }
    onUpdateTodoTitle(updatedTitle) {
        this.title = updatedTitle;
    }
}


export default TodoModel;
