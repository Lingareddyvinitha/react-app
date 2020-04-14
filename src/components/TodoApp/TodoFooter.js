import React from 'react';
import { observer } from 'mobx-react'
import TodoFilter from './TodoFilter'


@observer
class TodoFooter extends React.Component {
    render() {
        const { activeTodosCount, onChangeSelectedFilter, onClearCompleted } = this.props
        return (
            <div>
            <div>{activeTodosCount}</div>
            <TodoFilter  onChangeSelectedFilter={onChangeSelectedFilter} onClearCompleted={onClearCompleted}/>
            </div>
        )
    }
}
export default TodoFooter
