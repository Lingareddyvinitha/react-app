import { observable, action } from 'mobx';

export type objectType={
    title:string
    isCompleted:boolean
    id:number
}
class TodoModel {
    id:number;
    @observable title:string;
    @observable isCompleted:boolean;
    constructor(object:objectType) {
        this.title = object.title;
        this.isCompleted = object.isCompleted
        this.id = object.id
    }
    @action.bound
    onCompleteTodo(status:boolean) {
        this.isCompleted = status;
    }
    @action.bound
    onUpdateTodoTitle(updatedTitle:string) {
        this.title = updatedTitle;
    }
}


export default TodoModel;
