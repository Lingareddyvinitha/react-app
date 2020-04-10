import React from "react";
//import { observable } from 'mobx'
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";

import "./App.css";
/*
const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/page-1">
          <Page1 />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};
*/

import Home from './components/Home'
import TodosList from './components/TodosList'
import CountryList from './components/CountryList'
import CovidGraphs from './components/CountryList/CovidGraphs'
import FormComponent from './components/Form'
import Greeting from './components/Form/Greeting.js'
import FavouriteDessert from './components/Form/FavouriteDessert.js'
import YourState from './components/Form/YourState.js'
import DisableButton from './components/Form/DisableButton.js'
import VisitedCities from './components/Form/VisitedCities.js'
import DashBoard from './components/CovidGraphs'
import CountryDetails from './components/CovidGraphs/CountryDetails.js'
import EmojiGame from './components/EmojiGame'
//import CounterPage from './components/CounterPage'
import CounterApp from './components/CounterApp'
import MobxTodoApp from './components/MobxTodoApp'
import TodoApp from './components/TodoApp'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from "react-router-dom";
//@observer


class App extends React.Component {

  //@observable selectedTheme = 'light Mode'
  /*
  getCurrentTheme = () => {
    return themeStore.selectedTheme;
  }
  onChangeTheme = () => {
    themeStore.setCurrentTheme()
    //this.selectedTheme = theme;
  }*/
  /*
  this.state = {
    selectedTheme: 'light Mode'
  }*/
  static themeOptions = {
    light: {
      id: "0",
      name: "light Mode",
      backgroundColor: "bg-indigo-100",
      backgroundColorForCard: "white"

    },
    dark: {
      id: "1",
      name: "dark Mode",
      backgroundcolor: "#1a202c",
      backgroundColorForCard: "#2b6cb0"
    }
  }
  /*
  onChangeTheme = () => {
    if (this.getCurrentTheme() === 'light Mode') {
      //this.setState({ selectedTheme: 'dark Mode' })
      this.setCurrentTheme("dark Mode");
    }
    else {
      //this.setState({ selectedTheme: 'light Mode' })
      this.setCurrentTheme("light Mode");
    }
  }*/
  render() {
    let dessertList = ["Vanilla", "ButterScotch", "Gulab Jamum", "Yoghurt Pots", "Baked Banana", "Chocolate"]
    let statesList = ["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"];
    let citiesList = ["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"]
    return (
      <div>
      <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Switch>
        {/*
        <Route path="/counter-page">
            <CounterPage />
          </Route>
        */}
          <Route path="/TodosList">
            <TodosList />
          </Route>
          <Route exact path="/CountryList">
            <CountryList />
          </Route>
          <Route exact path={`/CountryList/:countryId`}>
            <CovidGraphs />
          </Route>
          <Route path="/FormComponent">
            <FormComponent />
          </Route>
          <Route path="/Greeting">
            <Greeting />
          </Route>
          <Route path="/FavouriteDessert">
            <FavouriteDessert  dessertList={dessertList}/>
          </Route>
          <Route path="/VisitedCities">
            <VisitedCities citiesList={citiesList}/>
          </Route>
          <Route path="/YourState">
            <YourState statesList={statesList}/>
          </Route>
          <Route path="/DisableButton">
            <DisableButton />
          </Route>
          <Route exact path="/DashBoard">
            <DashBoard/>
          </Route>
          <Route exact path={'/DashBoard/Details/:countryId'}>
            <CountryDetails />
          </Route>
          <Route path="/EmojiGame" children={<EmojiGame />} />
          <Route path="/counter-app" children={<CounterApp />} />
          <Route path="/mobx-todo-app" children={<MobxTodoApp />} />
          <Route path="/mobx-store-todo-app" children={<TodoApp />} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        </div>
    </Router>
    </div>
    )
  }

}
export default (App)
/*
export default function App() {
  return (
    <Router >
    <div>
        <Switch>
          <Route path="/TodosList">
            <TodosList />
          </Route>
          <Route exact path="/CountryList">
            <CountryList />
          </Route>
          <Route exact path={`/CountryList/:countryId`}>
            <CovidGraphs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      </div> 
    </Router>
  );
}*/
