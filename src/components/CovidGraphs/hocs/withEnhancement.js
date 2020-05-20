/*global fetch*/
import React from 'react'

export const withEnhancement = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props)
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
            this.setState({ countries: countries })

        }
        getCountries = async(countries) => {
            try {
                const response = await fetch(`https://restcountries.eu/rest/v2/all`); //global fetch
                const json = await response.json();
                if (!response.ok) {
                    throw { status: response.status, fullError: json };
                }
                console.log("func", json)
                return json;
            }
            catch (error) {
                return error.message;
            }
        }
        render() {
            const { countries } = this.state
            if (countries.length > 0) {
                return (
                    <WrappedComponent countries={countries} {...this.props}/>
                )
            }
            else {
                return (
                    <div>No Data</div>
                )
            }

        }
    }



}
