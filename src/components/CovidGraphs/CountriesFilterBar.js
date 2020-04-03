import React from 'react';
import SearchCountry from './SearchCountry.js'
import SelectRegion from './SelectRegion.js'
class CountriesFilterBar extends React.Component {
    render() {
        return (
            <div className={(this.props.selectedTheme === 'dark Mode') ?"dark":"light"}>
            <div className="filter">
            <SearchCountry onChangeSearchText={this.props.onChangeSearchText} searchText={this.props.searchText} selectedTheme={this.props.selectedTheme}/>
            <button onClick={this.props.reverseSorting}>Z-A</button>
            <button onClick={this.props.sorting}>A-Z</button>
            <SelectRegion onChangeSelectedRegion={this.props.onChangeSelectedRegion} regionOptions={this.props.regionOptions} selectedRegion={this.props.selectedRegion} selectedTheme={this.props.selectedTheme}/>
            </div>
            </div>
        )
    }
}
export default CountriesFilterBar
