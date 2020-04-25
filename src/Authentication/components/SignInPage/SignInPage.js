import React from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter } from "react-router-dom";
import { clearUserSession } from '../../utils/StorageUtils'
import {
    Container,
    SignInContainer,
    UserName,
    Password,
    SignIn,
    Heading,
    ErrorMessage

}
from '../../styledComponents/SignInPageStyles'

@inject('authStore')
@observer
class LoginPage extends React.Component {
    @observable username = ""
    @observable password = ""
    @observable errorMessage = ''
    getAuthStore = () => {
        return this.props.authStore
    }

    onChangeUsername = (event) => {
        this.username = event.target.value
    }

    onChangePassword = (event) => {
        this.password = event.target.value
    }

    onClickSignIn = () => {
        if (this.username !== '' && this.password !== '') {
            this.errorMessage = ''
            this.getAuthStore().userSignIn()
            this.navigatePage()

        }
        else if (this.username === '') {
            this.errorMessage = 'enter username'
        }
        else {
            this.errorMessage = 'enter password'
        }

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
            <UserName type='text' placeholder='UserName'
            value={this.username}
            onChange={this.onChangeUsername}>
            </UserName>
            <Password type='password' placeholder='Password' 
            value={this.password}
            onChange={this.onChangePassword}></Password>
            <SignIn onClick={this.onClickSignIn}>Sign in</SignIn>
            <ErrorMessage>{this.errorMessage}</ErrorMessage>
            </SignInContainer>
            </Container>
        )
    }
}

export default withRouter(LoginPage)
