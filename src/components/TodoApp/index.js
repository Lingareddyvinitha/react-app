import React from 'react';
import TodoList from './TodoList.js';
import TodoFooter from './TodoFooter.js';
import AddTodo from './AddTodo.js';
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
            selectedFilter={todoAppStore.selectedFilter}
            onChangeSelectedFilter={todoAppStore.onChangeSelectedFilter}
            onClearCompleted={todoAppStore.onClearCompleted}/>
            </div>
        )
    }
}
export default TodoApp
