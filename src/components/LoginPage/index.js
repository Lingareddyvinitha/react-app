import React from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter } from "react-router-dom";

@inject('loginStore')
@observer
class LoginPage extends React.Component {
    getLoginStore = () => {
        return this.props.loginStore
    }
    createToken = () => {
        this.getLoginStore().createToken()
        this.navigatePage()
    }
    navigatePage = () => {
        const { history } = this.props
        history.replace({ pathname: (`/`) })
    }
    render() {
        return (
            <div>
            <input type='text' placeholder='UserName'></input>
            <input type='password'></input>
            <button onClick={this.createToken}>submit</button>
            </div>
        )
    }
}

export default withRouter(LoginPage)
