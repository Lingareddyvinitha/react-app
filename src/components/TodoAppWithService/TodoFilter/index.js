import React from 'react';
import { observer } from 'mobx-react'
import { FooterContainer, ALL, ACTIVE, COMPLETED, CLEARCOMPLETED } from './styledComponent'

@observer
class TodoFilter extends React.Component {
    onChangeSelectedFilter = (event) => {
        const { onChangeSelectedFilter } = this.props
        onChangeSelectedFilter(event.target.value);

    }
    onClearCompleted = () => {
        const { onClearCompleted } = this.props
        onClearCompleted();
    }
    render() {
        return (
            <FooterContainer>
            <ALL onClick={this.onChangeSelectedFilter} value="ALL">ALL</ALL>
            <ACTIVE onClick={this.onChangeSelectedFilter} value="ACTIVE">ACTIVE</ACTIVE>
            <COMPLETED onClick={this.onChangeSelectedFilter} value="COMPLETED">COMPLETED</COMPLETED>
            <CLEARCOMPLETED onClick={this.onClearCompleted}>CLEAR COMPLETED</CLEARCOMPLETED>
            </FooterContainer>
        )
    }
}
export default TodoFilter;
