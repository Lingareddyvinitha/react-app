/*global fetch*/
/*global covid19*/
import React from 'react';
import { withRouter } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend }
from 'recharts'
import NavBarForCountryList from '../NavBarForCountryList.js'
class CovidGraphs extends React.Component {
    constructor(props) {
        super(props)
        const { match } = this.props
        this.countryData = this.props.location.state;
        this.state = { data: [], mode: this.countryData.mode }
        this.countryId = match.params.countryId.slice(1);
        const { history } = this.props
        this.history = history
    }
    async componentDidMount() {
        const data = covid19.data();
        this.setState({
            data: data.filter((object) =>
                object.country_iso3 === this.countryId
            ).groupByDate()
        })
    }
    lightOrDarkMode = () => {
        alert("graph")
        this.setState({ mode: !this.state.mode });
    }
    goBack = () => {
        alert("called")
        this.props.history.goBack();
    }


    render() {
        let languages = this.countryData.languages.map((object) => object.name);
        return (
            <div className={this.state.mode?"light":"dark"}>
            <NavBarForCountryList lightOrDarkMode={this.lightOrDarkMode} />
            <button className="back" onClick={this.goBack}>Back</button>
            <div className="country-total-info">
            <div className="flag-image-area">
            <img  className="flag-size" src={this.countryData.flag} alt="flag-img"></img>
            </div>
            <div>
            <div className="country-info">
            <div className="info-group-1">
            <p className="country-name">{this.countryData.name}</p>
            <p><span className="title-1">Native Name:</span>{this.countryData.nativeName}</p>
            <p><span className="title-1">population:</span>{this.countryData.population}</p>
            <p><span className="title-1">region:</span>{this.countryData.region}</p>
            <p><span className="title-1">Sub Region:</span>{this.countryData.subregion}</p>
            <p><span className="title-1">capital:</span>{this.countryData.capital}</p>
            </div>
            <div className="info-group-2">
            <p><span className="title-1">Top Level Domain:</span>{this.countryData.topLevelDomain[0]}</p>
            <p><span className="title-1">Currencies:</span>{this.countryData.currencies[0].name}</p>
            <p><span className="title-1">Languages:</span>{[...languages]}</p>
            </div>
            </div>
            <h3>Covid-19 Report</h3>
            <LineChart width={600} height={300} data={this.state.data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="date"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="confirmed" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="recovered" stroke="#82ca9d" />
       <Line type="monotone" dataKey="deaths" stroke="#8b0000" />
      </LineChart>
      </div>
      </div>
      </div>
        );
    }
}
export default withRouter(CovidGraphs)
