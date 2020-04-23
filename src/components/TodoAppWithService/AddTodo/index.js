import React from 'react';
import { observable } from 'mobx'
import { observer } from 'mobx-react'

import { InputOfTodo, InputContainer } from './styledComponent'

@observer
class AddTodo extends React.Component {
    @observable todoTitle
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
                const todoObject = {
                    id: Math.floor(Math.random() * 100),
                    title: this.todoTitle,
                    completed: false
                }
                onAddTodo(todoObject);
                this.todoTitle = ""
            }
        }
    }
    render() {
        return (
            <InputContainer>
            <InputOfTodo type="text" 
            value={this.todoTitle}
            onChange={this.onChangeInput} 
            onKeyDown={this.onKeyDown}
            placeholder='what needs to be done ?..'
            ></InputOfTodo>
            </InputContainer>
        )
    }
}
export default AddTodo
