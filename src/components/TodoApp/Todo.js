import React from 'react';
import TodoModel from '../../stores/TodoAppStore/TodoModel'


class Todo extends React.Component {
    onCompleteTodo = (event) => {
        const { todo } = this.props;
        todo.onCompleteTodo(event.target.checked);
    }
    onRemoveTodo = () => {
        const { onRemoveTodo } = this.props
        const { todo } = this.props
        onRemoveTodo(todo.id);
    }
    onUpdateTodoTitle = (event) => {
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
