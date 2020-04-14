import React from 'react';
import { observer } from 'mobx-react'

import TodoModel from '../../stores/TodoAppStore/TodoModel'
import Todo from './Todo'
type TodoListProps={
    todos:Array<TodoModel>
    onRemoveTodo:(id:number)=>void
}
@observer
class TodoList extends React.Component<TodoListProps>{
    onRemoveTodo = (idOfRemoveTodo:number) => {
        const { onRemoveTodo } = this.props
        onRemoveTodo(idOfRemoveTodo)
    }
    renderTodo = () => {
        const { todos } = this.props;
        return todos.map(todo => <Todo key={todo.id} todo={todo} onRemoveTodo={this.onRemoveTodo}/>)
    }

    render() {

        return (
            this.renderTodo()
        )
    }
}
export default TodoList