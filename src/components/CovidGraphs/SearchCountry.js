import React from 'react';
import searchImage from './search-icon.svg'
class SearchCountry extends React.Component {
    render() {
        const selectedTheme = this.props.selectedTheme;
        return (
            <div  className={(selectedTheme==='dark Mode')?"search-bar-group-dark":"search-bar-group-light"}>
            <img className="search-image" src={searchImage} alt="seach-icon" />
            <input type="text" onKeyDown={this.props.onChangeSearchText} placeholder="search for a country..." className={(selectedTheme==='dark Mode')?"search-bar-dark":"search-bar-light"}/>
            </div>
        )
    }
}
export default SearchCountry
