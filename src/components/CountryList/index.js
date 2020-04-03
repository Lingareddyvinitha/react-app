/*global fetch*/
/*global covid19*/
import React from 'react';
//import { withRouter } from "react-router";
import Country from './country.js'
import './index.css'
//import CovidGraphs from './CovidGraphs/covidgraphs.js'
import { withRouter } from "react-router-dom";
import loadingImage from './loader-icon.svg'
import searchImage from './search-icon.svg'
import NavBarForCountryList from './NavBarForCountryList.js'

class CountryList extends React.Component {
    constructor(props) {
        super(props);
        this.duplicateData = []
        this.state = { data: [], mode: true };
    }
    async componentDidMount() {
        const response = await fetch(`https://restcountries.eu/rest/v2/all`);
        const json = await response.json();
        this.duplicateData = json;
        this.setState({ data: this.duplicateData });

    }
    filterWithRegion = (event) => {
        let region = event.target.value;
        if (region !== "All") {
            this.setState({
                data: this.duplicateData.filter(country =>
                    country.region === region
                )
            })
        }
        else {
            this.setState({
                data: this.duplicateData
            })
        }
    }

    fiterWithCountry = (event) => {

        if (event.key === 'Enter') {
            let countryName = event.target.value;
            let pattern = countryName.toLowerCase();
            this.setState({
                data: this.duplicateData.filter(country =>
                    country.name.toLowerCase().match(pattern)
                )
            })
        }
    }
    getCountryInfo = (countryData) => {
        countryData.mode = this.state.mode;
        countryData.lightOrDarkMode = this.lightOrDarkMode()
        const { history } = this.props;
        history.push({ state: countryData, pathname: (`/CountryList/:${countryData.alpha3Code}`) });

    }
    lightOrDarkMode = () => {
        alert("list")
        this.setState({ mode: !this.state.mode });
    }

    render() {
        if (this.state.data.length === 0) {
            return (
                <div className="loading-Area">
                <img className="loading-image" src={loadingImage} alt="loading..."/>
                </div>)
        }
        else {
            return (
                <div className = { this.state.mode ? "light" : "dark" }>
                <NavBarForCountryList lightOrDarkMode={this.lightOrDarkMode} />
            <div className="filter">
            <div className="search-bar-group">
                        <img className="search-image" src={searchImage} alt="seach-icon" />
                        <input type="text" className="search-bar" onKeyDown={this.fiterWithCountry} placeholder="search for a country..."/>
                        </div>
      <div onChange={this.filterWithRegion}>
            <select className="select-options-group">
            <option value="All">All</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          </div>
    
    </div>
            <div className="country-list">{this.state.data.map((object)=>
                <Country key={object.name} data={object} id={object.alpha3Code} getCountryInfo={this.getCountryInfo} />)}
            </div>
            </div>
            )
        }

    }
}
export default withRouter(CountryList);
