import React from 'react';

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type AddTodoProps={
    onAddTodo:(title:string)=>void
}
class AddTodo extends React.Component<AddTodoProps> {
    todoTitle:string
    constructor(props) {
        super(props);
        this.todoTitle = ""
    }
    onChangeInput = (event:InputEvent) => {
        this.todoTitle = event.target.value;
    }
    onKeyDown=(event:React.KeyboardEvent)=>{
         const {onAddTodo}=this.props
        if (event.keyCode === 13) {
            if (this.todoTitle == "") {
                alert("you must write something");
            }
            else {
                onAddTodo(this.todoTitle);
                this.todoTitle=""
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
