import React from 'react';
import { observer, inject } from 'mobx-react';

//import NoDataView from '../common/NoDataView'
import TodoList from '../TodoList';
import TodoFooter from '../TodoFooter';
import AddTodo from '../AddTodo';
import { Header } from '../styledComponent'

@inject('todoStore')
@observer
class TodoView extends React.Component {
    getTodoStore = () => {
        return this.props.todoStore
    }
    onAddTodo = (todo) => {
        console.log(todo)
        this.getTodoStore().onAddTodo(todo)
    }
    onRemoveTodo = (idOfRemoveTodo) => {
        this.getTodoStore().onRemoveTodo(idOfRemoveTodo);
    }
    render() {
        return (
            <div>
            <Header>todos</Header>
            <AddTodo onAddTodo={this.onAddTodo}/>
            <TodoList todos={this.getTodoStore().FilteredTodos} onRemoveTodo={this.onRemoveTodo}/>
            <TodoFooter 
            activeTodosCount={this.getTodoStore().ActiveTodosCount} 
            onChangeSelectedFilter={this.getTodoStore().onChangeSelectedFilter}
            onClearCompleted={this.getTodoStore().onClearCompleted}/>
            </div>
        )
    }
}

export default TodoView
