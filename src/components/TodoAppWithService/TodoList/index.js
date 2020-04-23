import React from 'react';
import { observer } from 'mobx-react'

import Todo from '../Todo'
import { TodoContainer } from './styledComponent'

@observer
class TodoList extends React.Component {
    onRemoveTodo = (idOfRemoveTodo) => {
        const { onRemoveTodo } = this.props
        onRemoveTodo(idOfRemoveTodo)
    }
    renderTodo = () => {
        const { todos } = this.props;
        return todos.map(todo => <Todo key={todo.id} todo={todo} onRemoveTodo={this.onRemoveTodo}/>)
    }

    render() {
        return (
            <TodoContainer>
            {this.renderTodo()}
            </TodoContainer>
        )
    }
}
export default TodoList
