/*global fetch*/
import React from 'react';
import { withRouter } from "react-router-dom";
import { observer } from 'mobx-react';
import { observable } from 'mobx'

import todoAppStore from '../../stores/TodoAppStore'
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
import AddTodo from './AddTodo';
import { Loading, LoaderImg, DataNotFound, NetworkError, Message, RetryButton, Header } from './styledComponent'
import loaderImg from './loader-icon.svg';

@observer
class TodoApp extends React.Component {
    @observable loading = true
    @observable isFailedToFetch = false
    async componentDidMount() {
        let todos = await this.getTodos()
        if (todos !== 'Failed to fetch') {
            todos.map(todo => this.onAddTodo(todo.username))
        }
        else {
            this.isFailedToFetch = true
        }

    }
    getTodos = async(todos) => {

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users`); //global fetch
            console.log(response.status)
            console.log(response.ok)
            if (!response.ok) {
                alert("hi")
                throw new Error(response.status); // 404
            }
            const json = await response.json();
            this.loading = false
            return json;
        }
        catch (error) {
            this.loading = false
            return error.message
        }

    }
    onAddTodo = (title) => {
        todoAppStore.onAddTodo(title)
    }
    onRemoveTodo = (idOfRemoveTodo) => {
        todoAppStore.onRemoveTodo(idOfRemoveTodo);
    }
    refreshThePage = () => {
        const { history } = this.props;
        history.push({ pathname: (`${history.location.pathname}`) });
    }

    render() {
        let online = window.navigator.onLine
        return (
            <div>
            <Header>todos</Header>
            <div>{ !(online) || (this.isFailedToFetch) ?
            <NetworkError><Message>Network Error</Message><RetryButton onClick={this.refreshThePage}>Retry</RetryButton></NetworkError>:
            <div>
            <Loading>{(this.loading)?<LoaderImg  src={loaderImg} alt="loaderImg"></LoaderImg >:''}</Loading>
            <AddTodo onAddTodo={this.onAddTodo}/>
            <TodoList todos={todoAppStore.FilteredTodos} onRemoveTodo={this.onRemoveTodo}/>
            <TodoFooter 
            activeTodosCount={todoAppStore.ActiveTodosCount} 
            onChangeSelectedFilter={todoAppStore.onChangeSelectedFilter}
            onClearCompleted={todoAppStore.onClearCompleted}/>
            <DataNotFound>{(todoAppStore.todosLength===0)?"DataNotFound":""}</DataNotFound>
            </div>}
            </div>
            
            </div>
        )
    }
}
export default withRouter(TodoApp)
