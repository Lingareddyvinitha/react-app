/*global fetch*/
import React from 'react'
import { observer } from 'mobx-react'
import Header from './Header.js'
import { TiArrowLeftThick } from 'react-icons/ti'
import loaderImg from './loader-icon.svg'
import { withRouter } from "react-router-dom";
import themeStore from '../../stores/ThemeStore'
@observer
class CountryDetails extends React.Component {
    getCurrentTheme = () => {
        return themeStore.selectedTheme;
    }
    onChangeTheme = () => {
        themeStore.setCurrentTheme()
    }
    state = { countries: [] }
    async componentDidMount() {
        this.getCountryDetails()
    }
    getCountryDetails = async() => {
        const response = await fetch(`https://restcountries.eu/rest/v2/all`);
        const json = await response.json();
        this.setState({ countries: json });
    }
    navigateBack = () => {
        this.props.history.goBack();
    }
    pathChanges = (border) => {
        let path = `/DashBoard/Details/:${border}`
        this.props.history.replace(path);
    }
    countryAlpha3CodeChange(border) {
        this.pathChanges(border)
    }
    render() {
        const selectedTheme = this.getCurrentTheme();
        const alpha3Code = this.props.history.location.pathname.substr(20)
        let countryObject = this.state.countries.filter(country => country.alpha3Code === alpha3Code);
        const countryInfo = countryObject[0];
        if (this.state.countries.length === 0) {
            return (
                <div className="country-details" className={(selectedTheme==='dark Mode')?"dark":"light"}>
            <Header onChangeTheme={this.onChangeTheme} selectedTheme={selectedTheme} />
            <button onClick={this.navigateBack} className={(selectedTheme==='dark Mode')?"back-dark":"back-light"}><TiArrowLeftThick/>Back</button>
            <img src={loaderImg}  alt={loaderImg}></img>
            </div>
            )
        }
        else {
            let languages = countryInfo.languages.map((object) => object.name);
            return (
                <div className="country-details" className={(selectedTheme==='dark Mode')?"country-details-dark":"country-details-light"}>
            <Header onChangeTheme={this.onChangeTheme} selectedTheme={selectedTheme} />
            <button onClick={this.navigateBack} className={(selectedTheme==='dark Mode')?"back-dark":"back-light"}><TiArrowLeftThick/>Back</button>
            <div className="country-total-info">
            <div className="flag-image-area">
            <img  className="flag-size-countryDetails" src={countryInfo.flag} alt="flag-img"></img>
            </div>
            <div>
            <div className="country-info">
            <div className="info-group-1">
            <p className="country-name">{countryInfo.name}</p>
            <p><b>Native Name:</b>{countryInfo.nativeName}</p>
            <p><b>population:</b>{countryInfo.population}</p>
            <p><b>region:</b>{countryInfo.region}</p>
            <p><b>Sub Region:</b>{countryInfo.subregion}</p>
            <p><b>capital:</b>{countryInfo.capital}</p>
            </div>
            <div className="info-group-2">
            
            <p><b>Top Level Domain:</b>{countryInfo.topLevelDomain[0]}</p>
            <p><b>Currencies:</b>{countryInfo.currencies[0].name}</p>
            <p><b>Languages:</b>{[...languages].join(',')}</p>
            </div>
            </div>
      </div>
      </div>
      {countryInfo.borders.map(border=><button onClick={()=>this.countryAlpha3CodeChange(border)}>{border}</button>)}
      </div>
            );
        }

    }
}

export default withRouter(CountryDetails)
