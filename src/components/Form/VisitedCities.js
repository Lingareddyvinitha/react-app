import React from 'react'
import NavBar from './NavBar.js'
import CheckboxWithLabel from './CheckBoxWithLable.js'
import { withRouter } from "react-router-dom";
class VisitedCities extends React.Component {
    constructor(props) {
        super(props)
        this.title = "VisitedCities"
        this.citiesList = this.props.citiesList
        const { history } = this.props
        this.history = history
        this.state = {
            visitedCities: "",
            selectedCities: "",
            cityOptions: []
        }
    }
    handleCheckboxClick = (lable, isChecked) => {
        if (isChecked) {
            let city = lable;
            this.setState({
                selectedCities: lable,
                cityOptions: [...this.state.cityOptions, city]
            })
        }
        else {
            let city = lable
            this.setState({
                cityOptions: this.state.cityOptions.filter(eachCity => eachCity !== city)
            })
        }

    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.displayVisitedCitiesMessage()
    }
    displayVisitedCitiesMessage = () => {
        if (this.state.cityOptions.length === 0) {
            this.setState({
                visitedCities: ``
            })
        }
        else {
            this.setState({
                visitedCities: `I have visited these cities ${[...this.state.cityOptions]}`
            })
        }
    }
    renderCityOptions = () => {

    }
    render() {
        return (
            <div>
            <NavBar title={this.title} history={this.history}/>
            <form onSubmit={this.handleSubmit}>
            <div>which cities you are visited</div>
            <div>{this.citiesList.map((city)=>
            <CheckboxWithLabel lable={city} handleCheckboxClick ={this.handleCheckboxClick}/>)}
            </div>
        <input type="submit" value="Make Your Choice" />
      </form>
      <div>{this.state.visitedCities}</div>
      </div>
        )
    }
}
export default withRouter(VisitedCities)
