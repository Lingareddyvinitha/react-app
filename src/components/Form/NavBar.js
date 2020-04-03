import React from 'react'
import backArrow from './back-icon.svg'
class NavBar extends React.Component {
    goBack = () => {
        this.props.history.goBack();

    }
    render() {
        const title = this.props.title
        return (<div className="background-nav">
        <button  className="back-button" onClick={this.goBack}><img src={backArrow} alt="loading..."/>{title}</button>
        </div>)
    }
}
export default NavBar
