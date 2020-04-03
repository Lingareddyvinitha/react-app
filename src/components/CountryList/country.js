import React from 'react';
class Country extends React.Component {
    constructor(props) {
        super(props);
        this.id = props.id;
        this.countryData = props.data;
        this.getCountry = props.getCountryInfo
    }

    getCountryInfo = () => {
        this.getCountry(this.countryData)
    }
    render() {

        return (
            <div className="card" onClick={this.getCountryInfo}>
            <img  className="flag-size" src={this.countryData.flag} alt="flag-img"></img>
            <p className="country-name">name:{this.countryData.name}</p>
            <p>population:{this.countryData.population}</p>
            <p>region:{this.countryData.region}</p>
            <p>capital:{this.countryData.capital}</p>
            </div>
        )
    }
}
export default Country;
