/*global fetch*/
import React from 'react';
import Countries from './Countries.js';
import './index.css';
import loaderImg from './loader-icon.svg';
import CountriesFilterBar from './CountriesFilterBar.js';
import Header from './Header.js';
class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.regions = ["All"];
        this.state = {
            countries: [],
            searchText: "",
            selectedRegion: "All",
            errorMessage: "",
            sort: true
        };
    }
    async componentDidMount() {
        let countries = await this.getCountries();
        if (countries.length > 0) {
            this.countriesBySearchText = countries;
            this.countriesBySelectedRegion = countries;
            this.getRegionOptions(countries);
            this.setState({ countries: countries });
        }
        else {
            this.setState({ errorMessage: countries });
        }
    }
    getCountries = async(countries) => {
        try {
            const response = await fetch(`https://restcountries.eu/rest/v2/all`); //global fetch
            const json = await response.json();
            if (!response.ok) {
                throw { status: response.status, fullError: json };
            }
            return json;
        }
        catch (error) {
            return error.message;
        }
    }
    getRegionOptions = (countries) => {
        countries.forEach((country) => {
            if (this.regions.indexOf(country.region) === -1) {
                this.regions = [...this.regions, country.region]
            }
        })
    }
    filterCountriesBySelectedRegion = () => {
        this.countriesBySelectedRegion = this.state.countries.filter(country => (country.region === this.state.selectedRegion) || ("All" === this.state.selectedRegion))
    }
    filterCountriesBySearchText = () => {
        this.countriesBySearchText = this.state.countries.filter(country => (country.name.toLowerCase().match(this.state.searchText)))
    }
    displayCountries = () => {
        this.filterCountriesBySearchText();
        this.filterCountriesBySelectedRegion()
        let countriesShown = this.state.countries.filter(country => this.countriesBySearchText.includes(country) && this.countriesBySelectedRegion.includes(country))
        if (this.state.sort === false) {
            countriesShown = countriesShown.reverse()
        }
        else {
            countriesShown.sort()
        }
        return countriesShown;
    }
    onChangeTheme = (mode) => {
        this.props.onChangeTheme(mode);
    }
    onChangeSearchText = (event) => {
        if (event.key === 'Enter') {
            this.setState({ searchText: event.target.value });
        }
    }
    onChangeSelectedRegion = (region) => {
        this.setState({ selectedRegion: region })

    }
    reverseSorting = () => {
        this.setState({ sort: false });
    }
    sorting = () => {
        this.setState({ sort: true });
    }
    render() {
        const countries = this.displayCountries();
        let online = window.navigator.onLine
        const selectedTheme = this.props.selectedTheme;
        if (online !== true || (this.state.searchText === "" && countries.length === 0)) {
            return (<div className="show-error">{(online===true)?<div className="message"><b>{this.state.errorMessage}</b></div>:<div className="message"><b>Check your connection</b></div>}</div>)
        }
        else if (countries.length === 0) {
            return (
                <div className={(selectedTheme === 'dark Mode') ?  "dashboard-dark" :"dashboard-light"}>
                <Header onChangeTheme={this.onChangeTheme} selectedTheme={selectedTheme}/>
                <CountriesFilterBar searchText={this.state.searchText} regionOptions={this.regions} selectedRegion={this.state.selectedRegion} onChangeSelectedRegion={this.onChangeSelectedRegion} onChangeSearchText={this.onChangeSearchText} selectedTheme={selectedTheme} reverseSorting={this.reverseOrSorting} sorting={this.sorting} />
                {(this.state.searchText ==="")?<div className="loader"><img src={loaderImg} alt="loaderImg"></img></div>:<div className="message"><b>No Such Data Found</b></div>}
               </div>
            )
        }
        else {
            return (
                <div className={(selectedTheme === 'dark Mode') ?  "dark" :"light"}>
                <Header onChangeTheme={this.onChangeTheme} selectedTheme={selectedTheme}/>
                <CountriesFilterBar searchText={this.state.searchText} regionOptions={this.regions} selectedRegion={this.state.selectedRegion} onChangeSelectedRegion={this.onChangeSelectedRegion} onChangeSearchText={this.onChangeSearchText} selectedTheme={selectedTheme} reverseSorting={this.reverseSorting} sorting={this.sorting}/>
                <Countries countries={countries}/>
               </div>

            )
        }

    }
}
export default DashBoard;
