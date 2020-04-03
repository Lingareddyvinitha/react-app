import React from 'react';
import CountryCard from './CountryCard.js'
class Countries extends React.Component {
    render() {
        const countries = this.props.countries
        return (
            <div className="country-list">
            {countries.map((country)=><CountryCard key={country.name} countryDetails={country}/>)}
            </div>
        )
    }
}
export default Countries
