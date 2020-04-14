/*global React*/
/*global ReactDOM*/
import React from 'react';
import { observable } from 'mobx';
import { observer } from 'mobx-react'
import './index.css'
import ToDoItem from './todo'

@observer
class TodosLists extends React.Component {
    @observable TodoLists = []
    @observable selectedFilter;
    duplicateTodoList
    constructor(props) {
        super(props);
        this.duplicateTodoList = [];
        this.TodoLists = [];
        this.selectedFilter = "ALL";
    }
    addtodoTotodoList = (event) => {
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
                this.TodoLists = [...this.TodoLists, object]
                this.all();
            }
        }

    }
    removeTodoFromList = (idOfRemoveTodo) => {
        this.duplicateTodoList = this.duplicateTodoList.filter((todo) =>
            todo.id != idOfRemoveTodo
        );
        this.TodoLists = [...this.duplicateTodoList]

    }
    updateTodoValueInList = (updatedTodoValue, id) => {
        this.duplicateTodoList = this.duplicateTodoList.filter((todo) => {
            if (todo.id == id) {
                todo.value = updatedTodoValue;
            }
            return true;
        });
        this.TodoLists = [...this.duplicateTodoList];
    }
    isCompleted = (state, id) => {
        this.duplicateTodoList = this.duplicateTodoList.filter((todo) => {
            if (todo.id == id) {
                todo.checked = state;
            }
            return true;
        });
        this.TodoLists = [...this.duplicateTodoList];
    }
    all = () => {
        this.TodoLists = [...this.duplicateTodoList];
        this.selectedFilter = "ALL"
    }
    completed = () => {
        this.TodoLists = this.duplicateTodoList.filter((object) =>
            (object.checked));
        this.selectedFilter = "COMPLETED"


    }
    active = () => {
        this.TodoLists = this.duplicateTodoList.filter((object) =>
            (object.checked == false));
        this.selectedFilter = "ACTIVE"
    }
    clearCompleted = () => {
        this.duplicateTodoList = this.duplicateTodoList.filter((object) =>
            (object.checked == false)
        );
        this.TodoLists = [...this.duplicateTodoList]
    }

    render() {
        let count = 0;
        this.TodoLists.forEach((object) => {
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
      <input type="text" name="inputtext" id="inputText" className="input-from-user" placeholder="What needs to be done"  onKeyDown={this.addtodoTotodoList} />
      <ul id="addingElementsAsList" className="ul-element">
      {this.TodoLists.map((object)=>
         <ToDoItem key={object.key} value={object.value} 
         removeTodoFromList={this.removeTodoFromList} id={object.id}
         isCompleted={object.isCompleted}  updateTodoValueInList={object.updateTodoValueInList} checked = {object.checked}               />
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

export default TodosLists;
