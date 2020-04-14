/*global React*/
/*global ReactDOM*/
import React from 'react';

import './index.css'
import ToDoItem from './todo'

class TodosLists extends React.Component {
    constructor(props) {
        super(props);
        this.duplicateTodoList = [];
        this.state = { TodoLists: [] }
    }
    addCarToCarsList = (event) => {
        if (event.keyCode === 13) {
            let value = event.target.value;
            if (value == "") {
                alert("you must write something");
            }
            else {
                let id = Math.floor(Math.random() * 100)
                event.target.value = "";
                let object = { "id": id, "value": value, "removeTodoFromList": this.removeTodoFromList, "key": id, "isCompleted": this.isCompleted, "updateTodoValueInList": this.updateTodoValueInList, "checked": false };
                this.duplicateTodoList = [...this.duplicateTodoList, object]
                this.setState({ TodoLists: [...this.state.TodoLists, object] });
                this.all();
            }
        }

    }
    removeTodoFromList = (idOfRemoveTodo) => {
        this.duplicateTodoList = this.duplicateTodoList.filter((object) =>
            object.id != idOfRemoveTodo
        );
        this.setState({
            TodoLists: this.duplicateTodoList
        });

    }
    updateTodoValueInList = (updatedTodoValue, id) => {
        this.duplicateTodoList = this.duplicateTodoList.filter((object) => {
            if (object.id == id) {
                object.value = updatedTodoValue;
            }
            return true;


        });
        this.setState({
            TodoLists: this.duplicateTodoList
        })
    }
    isCompleted = (state, id) => {
        this.duplicateTodoList = this.duplicateTodoList.filter((object) => {
            if (object.id == id) {
                object.checked = state;
            }
            return true;
        });
        this.setState({
            TodoLists: this.duplicateTodoList
        })
    }
    all = () => {
        this.setState({ TodoLists: this.duplicateTodoList });
    }
    completed = () => {
        this.setState({
            TodoLists: this.duplicateTodoList.filter((object) =>
                (object.checked))
        });
    }
    active = () => {
        this.setState({
            TodoLists: this.duplicateTodoList.filter((object) =>
                (object.checked == false))
        });
    }
    clearCompleted = () => {
        this.duplicateTodoList = this.duplicateTodoList.filter((object) =>
            (object.checked == false)
        );
        this.setState({
            TodoLists: this.duplicateTodoList
        })
    }

    render() {
        let count = 0;
        this.state.TodoLists.forEach((object) => {
            if (object.checked == false) {
                count += 1;
            }
        })
        return (
            <div>
            <p className="title">
            todos
            </p>
    <div className="todo-list">
      <input type="text" name="inputtext" id="inputText" className="input-from-user" placeholder="What needs to be done"  onKeyDown={this.addCarToCarsList} />
      <ul id="addingElementsAsList" className="ul-element">
      {this.state.TodoLists.map((object)=>
         <ToDoItem key={object.key} value={object.value} removeTodoFromList={this.removeTodoFromList} id={object.id} editElementsInList={object.editElementsInList} isCompleted={object.isCompleted}  updateTodoValueInList={object.updateTodoValueInList} checked = {object.checked}              />
      )}
      </ul>
      <div className="total-count" id="footer">
        <div id="itemsLeft" className="items-left">{count}itemsLeft</div>
        <div className="current-buttons">
          <button className="all"  onClick={this.all} id="all">All</button>
          <button className="active" id="active" onClick={this.active}>Active</button>
          <button className="completed" id="completed" onClick={this.completed}>Completed</button>
        </div>
        <button className="clear" id="clear" onClick={this.clearCompleted}>Clear completed</button>
      </div>
      </div>
      </div>
        );
    }
}
//ReactDOM.render(<ToDoList />, document.getElementById('root'));

export default TodosLists;
