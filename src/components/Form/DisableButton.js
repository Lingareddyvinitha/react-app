import React from 'react'
import NavBar from './NavBar.js'
import { withRouter } from "react-router-dom";
class DisableButton extends React.Component {
    constructor(props) {
        super(props)
        this.title = "DisableButton"
        const { history } = this.props
        this.history = history
        this.state = {
            isDisableButtonChecked: false,
            showMessage: ""
        }
    }
    handleChange = (event) => {
        this.setState(({ isDisableButtonChecked: event.target.checked }), () => {
            if (this.state.isDisableButtonChecked) {
                this.setState({ showMessage: 'I am disabled' })

            }
            else {
                this.setState({ showMessage: "" })
            }
        })

    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.displayMessage()
    }
    displayMessage = () => {
        this.setState({ showMessage: 'I am enabled' })
    }
    render() {
        return (
            <div>
            <NavBar title={this.title} history={this.history}/>
            <form onSubmit={this.handleSubmit}>
            <label>
          <input type="checkBox"  onChange={this.handleChange}/>
          Disabled
          </label>
        <input type="submit" value="Click Me" disabled={this.state.isDisableButtonChecked}/>
      </form>
      <div>{this.state.showMessage}</div>
            </div>
        );
    }

}
export default withRouter(DisableButton)
