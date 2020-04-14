/*global React*/
/*global ReactDOM*/
import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react'
import './index.css'

@observer
class ToDoItem extends React.Component {
    @observable disable;
    constructor(props) {
        super(props);

        this.disable = false;
    }
    editElement = (event) => {
        const { isCompleted } = this.props
        if (event.target.checked === true) {

            isCompleted(true, event.target.parentNode.id);
            /*
            this.setState((state => ({
                disable: true
            })));*/
            this.disable = true
        }
        else {
            isCompleted(false, event.target.parentNode.id);
            /*
            this.setState((state => ({
                disable: false
            })));*/
            this.disable = false
        }
    }
    removeTodo = (event) => {
        const { removeTodoFromList } = this.props
        removeTodoFromList(event.target.parentNode.id);
    }
    updateTodoValue = (event) => {
        const { updateTodoValueInList } = this.props
        updateTodoValueInList(event.target.value, event.target.parentNode.id);
    }
    render() {
        const { value, id, checked } = this.props
        return (
            <li className="li-element" id={id}>
            <input  type="checkbox"onClick={this.editElement} defaultChecked={checked}></input>
            <input defaultValue={value} className="text" disabled={this.disable} onChange={this.updateTodoValue} />
            <span className="close" onClick={this.removeTodo}>×</span>
            </li>
        );
    }
}
export default ToDoItem;
