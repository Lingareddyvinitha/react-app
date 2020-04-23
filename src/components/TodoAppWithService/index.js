import React from 'react';
import { observer, inject } from 'mobx-react';

import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure'
import NoDataView from '../common/NoDataView'
import TodoView from './TodoView'

@inject('todoStore')
@observer
class TodoAppWithService extends React.Component {
    componentDidMount() {
        this.doNetworkCalls()
    }
    getTodoStore = () => {
        return this.props.todoStore
    }

    componentWillUnmount() {
        this.getTodoStore().clearStore()
    }

    doNetworkCalls = () => {
        this.getTodoStore().getTodosAPI()
    }
    renderTodoList = () => {
        if (this.getTodoStore().FilteredTodos.length === 0) {
            return <NoDataView/>
        }
        else {
            return (
                <TodoView/>
            )
        }

    }

    render() {
        const { getTodoApiStatus, getTodoApiError } = this.getTodoStore()
        return (
            <LoadingWrapperWithFailure
            apiStatus={getTodoApiStatus}
            apiError={getTodoApiError}
            onRetryClick={this.doNetworkCalls}
            renderSuccessUI={this.renderTodoList}
            />

        )
    }
}

export default TodoAppWithService
