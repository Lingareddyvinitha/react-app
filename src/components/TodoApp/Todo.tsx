import React from 'react';
import TodoModel from '../../stores/TodoAppStore/TodoModel'

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type TodoProps={
    todo:TodoModel
    onRemoveTodo:(id:number)=>void
}
class Todo extends React.Component <TodoProps>{
    onCompleteTodo = (event:any) => {
        const { todo } = this.props;
        todo.onCompleteTodo(event.target.checked);
    }
    onRemoveTodo = () => {
        const { onRemoveTodo } = this.props
        const { todo } = this.props
        onRemoveTodo(todo.id);
    }
    onUpdateTodoTitle = (event:InputEvent) => {
        const { todo } = this.props;
        todo.onUpdateTodoTitle(event.target.value);
    }
    render() {
        const { todo } = this.props
        return (
            <div>
            <input  type="checkbox" onClick={this.onCompleteTodo} defaultChecked={todo.isCompleted}></input>
            <input defaultValue={todo.title} onChange={this.onUpdateTodoTitle} />
            <span onClick={this.onRemoveTodo}>×</span>
            </div>
        )
    }
}
export default Todo
