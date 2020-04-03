/*global React*/
/*global ReactDOM*/
import React from 'react';
import './index.css'
class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.value = props.value;
        this.listId = props.id;
        this.removeTodoFromList = props.removeTodoFromList;
        this.updateTodoValueInList = props.updateTodoValueInList
        this.editElementsInList = props.editElementsInList;
        this.completed = props.isCompleted
        this.checked = props.checked
        this.state = {
            disable: false
        }
    }
    editElement = (event) => {
        if (event.target.checked === true) {
            this.completed(true, event.target.parentNode.id);
            this.setState((state => ({
                disable: true
            })));
        }
        else {
            this.completed(false, event.target.parentNode.id);
            this.setState((state => ({
                disable: false
            })));
        }
    }
    removeTodo = (event) => {
        this.removeTodoFromList(event.target.parentNode.id);
    }
    updateTodoValue = (event) => {
        this.updateTodoValueInList(event.target.value, event.target.parentNode.id);
    }
    render() {
        return (
            <li className="li-element" id={this.listId}>
            <input  type="checkbox" onClick={this.editElement} defaultChecked={this.checked}></input>
            <input defaultValue={this.value} className="text" disabled={this.state.disable} onChange={this.updateTodoValue} />
            <span className="close" onClick={this.removeTodo}>×</span>
            </li>
        );
    }
}
export default ToDoItem;
