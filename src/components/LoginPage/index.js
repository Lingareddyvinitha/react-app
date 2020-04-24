import React from 'react'
import { observer, inject } from 'mobx-react'
import { withRouter } from "react-router-dom";
import { setAccessToken, clearUserSession } from '../../utils/StorageUtils'

@inject('loginStore')
@observer
class LoginPage extends React.Component {
    componentWillUnmount() {
        return clearUserSession()
    }
    getLoginStore = () => {
        return this.props.loginStore
    }
    createToken = () => {
        setAccessToken(12345)
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
