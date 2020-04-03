import React from 'react'
import NavBar from './NavBar.js'
import { withRouter } from "react-router-dom";
class FavourateDessert extends React.Component {
  constructor(props) {
    super(props)
    this.title = "FavourateDessert"
    this.dessertList = this.props.dessertList
    const { history } = this.props
    this.history = history
    this.state = {
      selectedDessert: "",
      favoriteDessert: ""
    }
  }
  handleUserInput = (event) => {
    this.setState({ selectedDessert: event.target.value })

  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.displayMessage()
  }
  displayMessage = () => {
    if (this.state.selectedDessert.length === 0) {
      this.setState({
        favoriteDessert: ``
      })
    }
    else {
      this.setState({
        favoriteDessert: `My favourite dessert is ${this.state.selectedDessert.toUpperCase()}`
      })
    }
  }
  renderDessertOptions = () => {}
  render() {
    this.renderDessertOptions();
    return (
      <div>
            <NavBar title={this.title} history={this.history}/>
            <form onSubmit={this.handleSubmit}>
            <div>what is your favourite dessert</div>
            <div>{this.dessertList.map((item)=>
            <div>
            <label>
          <input type="radio"  name="dessert" value={item} onChange={this.handleUserInput} />
          {item}
        </label><br/>
        </div>
            )}</div>
        <input type="submit" value="Make Your Choice" />
      </form>
      <div>{this.state.favoriteDessert}</div>
      </div>
    )
  }
}
export default withRouter(FavourateDessert)
