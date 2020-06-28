import React from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter, Redirect } from "react-router-dom";
import { getAccessToken } from '../../utils/StorageUtils';
//import { API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants'

import Loader from 'react-loader-spinner'
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

export const SignButton = (props) => {
    return <SignIn onClick={props.onClickSignIn}>
            {
                (props.getUserSignInAPIStatus === 100) ? <Loader type="Oval" color="white" height={30} width={30} /> : <span>{props.buttonName ?? "Sign in"}</span> }
            </SignIn>
}

export const Input = (props) => {
    return <UserName type={props.type??"text"} placeholder={props.placeholder??"InputTag"}
            ref={props.userNameRef}
            value={props.username}
            onChange={props.onChangeUsername}
            onKeyDown={props.onChangeUsername}>
            </UserName>
}

export const SignInLoader = (props) => {
    return< Loader type = "Oval"
     color = { props.color ? ? "black" } height = { props.height ? ? 30 } width = { props.width ? ? 30 } />
}



@observer
class LoginPage extends React.Component {
    userNameRef = React.createRef();
    passwordRef = React.createRef();
    componentDidMount() {
        this.userNameRef.current.focus()
    }

    renderSignInButton = (props) => {
        const { onClickSignIn, getUserSignInAPIStatus } = this.props
        return <SignButton onClickSignIn={onClickSignIn} getUserSignInAPIStatus={getUserSignInAPIStatus}/>
    }


    render() {
        const {
            onChangeUsername,
            onChangePassword,
            onClickSignIn,
            username,
            password,
            errorMessage,
            getUserSignInAPIStatus,
            gotoECommerceAppIfLoggedIn,
            changeFocusToPassword
        } = this.props

        return (
            <Container>
            <SignInContainer>
            <Heading>Sign In</Heading>
            
            <UserName type='text' placeholder='Username'
            ref={this.userNameRef}
            value={username}
            onChange={onChangeUsername}
            onKeyDown={onChangeUsername}>
            </UserName>
            <Password type='password' placeholder='Password'
            ref={this.passwordRef}
            value={password}
            onChange={onChangePassword}
            onKeyPress={onChangePassword}></Password>
            {this.renderSignInButton()}
            {(getUserSignInAPIStatus===200)&& gotoECommerceAppIfLoggedIn()}
            <ErrorMessage>{errorMessage}</ErrorMessage>
            </SignInContainer>
            </Container>
        )
    }
}


export default LoginPage
