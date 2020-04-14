import React from 'react';


type TodoFilterProps={
    onChangeSelectedFilter:(filter:string)=>void
    onClearCompleted :()=>void
}
class TodoFilter extends React.Component<TodoFilterProps>{
    onChangeSelectedFilter = (event:any) => {
        const { onChangeSelectedFilter } = this.props
        onChangeSelectedFilter(event.target.value);

    }
    onClearCompleted = () => {
        const { onClearCompleted } = this.props
        onClearCompleted();
    }
    render() {
        return (
            <div>
            <button onClick={this.onChangeSelectedFilter} value="ALL">ALL</button>
            <button onClick={this.onChangeSelectedFilter} value="ACTIVE">ACTIVE</button>
            <button onClick={this.onChangeSelectedFilter} value="COMPLETED">COMPLETED</button>
            <button onClick={this.onClearCompleted}>CLEAR COMPLETED</button>
            </div>
        )
    }
}
export default TodoFilter;
