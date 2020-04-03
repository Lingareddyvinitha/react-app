import React from 'react'
import { withRouter } from "react-router-dom";
import {
  Link
}
from "react-router-dom";
import NavBar from './NavBar.js'
import './index.css'
class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    const { history } = this.props
    this.history = history
    this.title = "FormComponent"
  }

  render() {

    return (
      <div>
      <NavBar title={this.title} history={this.history}/>
      
            <nav>
          <ul>
            <li>
              <Link to="/Greeting">Greetings</Link>
            </li>
             <li>
              <Link to="/FavouriteDessert">Favourite Dessert</Link>
            </li>
            <li>
              <Link to="/VisitedCities">Visited Cities</Link>
            </li>
              <li>
              <Link to="/YourState">Your State</Link>
            </li>
            <li>
              <Link to="/DisableButton">Disable Button</Link>
            </li>
            </ul>
            </nav>
            
           
            {/*


            
          </ul>
        </nav>*/}
            </div>
    )
  }
}
export default withRouter(FormComponent)
