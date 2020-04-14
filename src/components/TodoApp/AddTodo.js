import React from 'react';


class AddTodo extends React.Component {
    todoTitle
    constructor(props) {
        super(props);
        this.todoTitle = ""
    }
    onChangeInput = (event) => {
        this.todoTitle = event.target.value;
    }
    onKeyDown = (event) => {
        const { onAddTodo } = this.props
        if (event.keyCode === 13) {
            if (this.todoTitle == "") {
                alert("you must write something");
            }
            else {
                onAddTodo(this.todoTitle);
                this.todoTitle = ""
            }
        }
    }
    render() {
        return (
            <input type="text" value={this.todoTitle} 
            onChange={this.onChangeInput} 
            onKeyDown={this.onKeyDown}></input>
        )
    }
}
export default AddTodo
