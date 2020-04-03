import React from 'react'
import NavBar from './NavBar.js'
import { withRouter } from "react-router-dom";
class YourState extends React.Component {
    constructor(props) {
        super(props)
        this.title = "YourState"
        this.statesList = this.props.statesList
        const { history } = this.props
        this.history = history
        this.state = {
            selectedState: "",
            submittedState: ""
        }
    }
    handleChange = (event) => {
        console.log("hi")
        this.setState({ selectedState: event.target.value })

    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.displayMessage()
    }
    displayMessage = () => {
        if (this.state.selectedState.length === 0) {
            this.setState({
                submittedState: ``
            })
        }
        else {
            this.setState({
                submittedState: `I am from ${this.state.selectedState} state`
            })
        }
    }
    renderDessertOptions = () => {}
    render() {
        console.log(this.statesList.length)
        return (
            <div>
            <NavBar title={this.title} history={this.history}/>
            <form onSubmit={this.handleSubmit}>
            <select value={this.state.selectedState} onChange={this.handleChange}>
            {this.statesList.map((state)=>
            <option value={state}>{state}</option>
            )}
             </select>
            
        <input type="submit" value="Select Your company" />
      </form>
      <div>{this.state.submittedState}</div>
      </div>
        )
    }
}
export default withRouter(YourState)
