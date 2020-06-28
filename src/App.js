import React from "react";
import { Provider } from 'mobx-react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
from "react-router-dom";

import HomePage from "./components/HomePage";
import Page1 from "./components/Page1";
import "./App.css";
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
import EventsApp from './components/EventsApp'
import A from './components/A'
import GridMemoryGame from './components/GridGame'
import UsersPage from './components/UsersPage'
import TodoAppWithService from './components/TodoAppWithService'
import LoginPage from './components/LoginPage'
import stores from './stores'
import EcommerceStore from './E-CommerceApp/stores/EcommerceStore'
import AuthRoutes from './Authentication/routes'
import ProductsPageRoutes from './E-CommerceApp/routes/ProductsPageRoutes'
import { ProtectedRoutes } from './common/ProtectedRoutes'
import { ProductsPageRoute } from "./E-CommerceApp/routes/ProductsPage";
import { PracticeAdvancedConceptsRoute } from './common/routes/PracticeAdvancedConceptsRoute'
import { Pagination } from './components/common/Pagination'

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
  render() {
    let dessertList = ["Vanilla", "ButterScotch", "Gulab Jamum", "Yoghurt Pots", "Baked Banana", "Chocolate"]
    let statesList = ["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"];
    let citiesList = ["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"]
    return (
      <Provider {...stores} {...EcommerceStore}>
      <div>
      <Router basename={process.env.PUBLIC_URL}>
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
          <Route exact path="/mobx-store-todo-app" children={<TodoApp />} />
          <Route path="/events-app" children={<EventsApp />} />
          <Route path="/a" children={<A />} />
          <Route path="/grid-game" children={<GridMemoryGame />} />
          <Route path="/users-page" component={UsersPage}/>
          <Route path="/todo-page" component={TodoAppWithService}/>
          <Route path="/login-page" component={LoginPage}/>
          <ProtectedRoutes exact path='/products-page' component={ProductsPageRoute}/>
          <Route path="/practice-advanced-concepts" component={PracticeAdvancedConceptsRoute}/>
          <Route path="/pagination" component={Pagination}/>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
        </div>
    </Router>
    </div>
    </Provider>

    )
  }

}
export default App
