import React from 'react'
import NavBar from './NavBar.js'
import { withRouter } from "react-router-dom";
class Greeting extends React.Component {
    constructor(props) {
        super(props)
        this.title = "Greeting"
        const { history } = this.props
        this.history = history
        this.state = {
            userInputText: "",
            displayName: ""
        }
    }
    handleUserInput = (event) => {
        this.setState({ userInputText: event.target.value })

    }
    handleSubmit = (event) => {
        this.displayMessage()
        event.preventDefault();
    }
    displayMessage = () => {
        this.setState({
            displayName: `Hello ${this.state.userInputText},Have a nice day!`,
            userInputText: ''
        })
    }
    render() {
        return (
            <div>
            <NavBar title={this.title} history={this.history}/>
            <form onSubmit={this.handleSubmit}>
                    <label>
                      Name:
                      <input type="text"  value={this.state.userInputText} onChange={this.handleUserInput}/>
                    </label>
                    <input type="submit" value="Submit" />
                  </form>
      <div>{this.state.displayName}</div>
      </div>
        )
    }
}
export default withRouter(Greeting)
