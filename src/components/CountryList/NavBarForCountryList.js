import React from 'react'
class NavBarForCountryList extends React.Component {
    constructor(props){
        super(props)
    }
    lightOrDarkMode=()=>{
        this.props.lightOrDarkMode();
    }
    render() {
        return (
            <div>
            <h1>Where in the World</h1>
            <button onClick={this.lightOrDarkMode}>button</button>
            </div>
        )
    }
}
export default NavBarForCountryList
