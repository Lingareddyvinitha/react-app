import React from 'react';
class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.onAddTodo = props.onAddTodo;
        this.todoTitle = ""
    }
    onChangeInput = () => {
        this.todoTitle = event.target.value;
        if (event.keyCode === 13) {
            if (this.todoTitle == "") {
                alert("you must write something");
            }
            else {
                event.target.value = "";
                this.onAddTodo(this.todoTitle);
            }
        }

    }
    render() {
        return (
            <input type="text"  onKeyDown={this.onChangeInput}></input>
        )
    }
}
export default AddTodo
