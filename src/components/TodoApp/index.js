import React from 'react';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import AddTodo from './AddTodo';
import { observer } from 'mobx-react';
import todoAppStore from '../../stores/TodoAppStore'

@observer
class TodoApp extends React.Component {
    onAddTodo = (title) => {
        todoAppStore.onAddTodo(title)
    }
    onRemoveTodo = (idOfRemoveTodo) => {
        todoAppStore.onRemoveTodo(idOfRemoveTodo);
    }

    render() {
        return (
            <div>
            <AddTodo onAddTodo={this.onAddTodo}/>
            <TodoList todos={todoAppStore.FilteredTodos} onRemoveTodo={this.onRemoveTodo}/>
            <TodoFooter 
            activeTodosCount={todoAppStore.ActiveTodosCount} 
            onChangeSelectedFilter={todoAppStore.onChangeSelectedFilter}
            onClearCompleted={todoAppStore.onClearCompleted}/>
            </div>
        )
    }
}
export default TodoApp
