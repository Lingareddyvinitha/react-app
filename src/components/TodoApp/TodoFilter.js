import React from 'react';

import { FooterContainer } from './styledComponent'

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
            <button onClick={this.onChangeSelectedFilter} value="ALL">ALL</button>
            <button onClick={this.onChangeSelectedFilter} value="ACTIVE">ACTIVE</button>
            <button onClick={this.onChangeSelectedFilter} value="COMPLETED">COMPLETED</button>
            <button onClick={this.onClearCompleted}>CLEAR COMPLETED</button>
            </FooterContainer>
        )
    }
}
export default TodoFilter;
