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


@observer
class LoginPage extends React.Component {
    render() {
        const {
            onChangeUsername,
            onChangePassword,
            onClickSignIn,
            username,
            password,
            errorMessage,
            getUserSignInAPIStatus,
            gotoECommerceAppIfLoggedIn
        } = this.props
        return (
            <Container>
            <SignInContainer>
            <Heading>Sign In</Heading>
            <UserName type='text' placeholder='Username'
            value={username}
            onChange={onChangeUsername}>
            </UserName>
            <Password type='password' placeholder='Password' 
            value={password}
            onChange={onChangePassword}></Password>
            <SignIn onClick={onClickSignIn}>
            {(getUserSignInAPIStatus===100)?<Loader data-testid="loading" type="Oval" color="white" height={30} width={30} />:"Sign in"}
            </SignIn>
            {(getUserSignInAPIStatus===200)&& gotoECommerceAppIfLoggedIn()}
            <ErrorMessage>{errorMessage}</ErrorMessage>
            </SignInContainer>
            </Container>
        )
    }
}

export default LoginPage
