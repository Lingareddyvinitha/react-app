import React from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter } from "react-router-dom";
import { clearUserSession } from '../../utils/StorageUtils'
import { Container, SignInContainer, UserName, Password, SignIn, Heading } from '../../styledComponents/SignInPageStyles'

@observer
class LoginPage extends React.Component {
    @observable username
    @observable password
    @observable errorMessage
    componentWillUnmount() {
        return clearUserSession()
    }
    getAuthStore = () => {
        return this.props.authStore
    }

    onChangeUsername = () => {

    }

    onChangePassword = () => {

    }

    onClickSignIn = () => {

    }
    navigatePage = () => {
        const { history } = this.props
        history.replace({ pathname: (`/`) })
    }
    render() {
        return (
            <Container>
            <SignInContainer>
            <Heading>Sign in</Heading>
            <UserName type='text' placeholder='UserName' onChange={this.onChangeUsername}></UserName>
            <Password type='password' placeholder='Password' onChange={this.onChangePassword}></Password>
            <SignIn onClick={this.onClickSignIn}>Sign in</SignIn>
            </SignInContainer>
            </Container>
        )
    }
}

export default withRouter(LoginPage)
