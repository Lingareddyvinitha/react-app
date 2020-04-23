import React from 'react';
import { observer } from 'mobx-react'

import { Container, ToDo, CheckBox, Delete } from './styledComponent'
@observer
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
            <Container>
            <CheckBox  type="checkbox" onClick={this.onCompleteTodo} defaultChecked={todo.isCompleted}></CheckBox>
            <ToDo defaultValue={todo.title} onChange={this.onUpdateTodoTitle}></ToDo>
            <Delete onClick={this.onRemoveTodo}>×</Delete>
            </Container>
        )
    }
}
export default Todo
