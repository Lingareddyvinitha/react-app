import React from 'react';
import { observer } from 'mobx-react'
import TodoFilter from '../TodoFilter'
import { Container } from './styledComponent'


@observer
class TodoFooter extends React.Component {
    render() {
        const { activeTodosCount, onChangeSelectedFilter, onClearCompleted } = this.props
        return (
            <Container>
            <div>{activeTodosCount}</div>
            <TodoFilter  onChangeSelectedFilter={onChangeSelectedFilter} onClearCompleted={onClearCompleted}/>
            </Container>
        )
    }
}
export default TodoFooter
