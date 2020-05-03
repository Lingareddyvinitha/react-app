import React from 'react';
import { inject, observer } from 'mobx-react'
import {
  Link,
  Redirect
}
from "react-router-dom";
import { getAccessToken } from '../../utils/StorageUtils'

@inject('loginStore')
@observer
class Home extends React.Component {
  getLoginStore = () => {
    return this.props.loginStore
  }
  gotoTodoScreenIfLoggedIn = () => {
    return (
      <Redirect
      to={{
      pathname:'/sign-in-page'
      }}
      />
    )
  }
  render() {
    let token = getAccessToken()
    /*
    if (true) {
      return this.gotoTodoScreenIfLoggedIn()
    }*/
    return (
      <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/TodosList">TodosList</Link>
                  </li>
                  <li>
                    <Link to="/CountryList">CountryList</Link>
                  </li>
                  <li>
                    <Link to="/Example">Example</Link>
                  </li>
                  <li>
                    <Link to="/FormComponent">FormComponent</Link>
                  </li>
                  <li>
                    <Link to="/DashBoard">DashBoard</Link>
                  </li>
                  <li>
                    <Link to="/EmojiGame">EmojiGame</Link>
                  </li>
                  <li>
                    <Link to="/counter-app">CounterApp</Link>
                  </li>
                  <li>
                    <Link to="/mobx-todo-app">MobxTodoApp</Link>
                  </li>
                  <li>
                    <Link to="/mobx-store-todo-app">TodoApp</Link>
                  </li>
                  <li>
                    <Link to="/events-app">EventsApp</Link>
                  </li>
                  <li>
                    <Link to="/a">A</Link>
                  </li>
                  <li>
                    <Link to="/grid-game">GridMemoryGame</Link>
                  </li>
                  <li>
                    <Link to="/users-page">UsersPage</Link>
                  </li>
                  <li>
                    <Link to="/todo-page">TodoAppWithService</Link>
                  </li>
                  <li>
                    <Link to="/login-page">LoginPage</Link>
                  </li>
                  <li>
                    <Link to="/sign-in-page">SignInPage</Link>
                  </li>
                </ul>
              </nav>
                  </div>
    );
  }
}
export default Home;
