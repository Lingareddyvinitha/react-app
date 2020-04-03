import React from 'react';
import { withRouter } from "react-router-dom";
class CountryCard extends React.Component {
    constructor(props) {
        super(props)
    }
    navigateToCountryDetailsPage = () => {
        const { history } = this.props;
        history.push({ pathname: (`/DashBoard/Details/:${this.props.countryDetails.alpha3Code}`) });
    }
    render() {
        const countryDetails = this.props.countryDetails
        return (
            <div className="card" onClick={this.navigateToCountryDetailsPage}>
            <img  className="flag-size" src={countryDetails.flag} alt="flag-img"></img>
            <p className="country-name">name:{countryDetails.name}</p>
            <p>population:{countryDetails.population}</p>
            <p>region:{countryDetails.region}</p>
            <p>capital:{countryDetails.capital}</p>
            </div>
        )
    }
}
export default withRouter(CountryCard)
