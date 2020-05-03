import React from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter, Redirect } from "react-router-dom";
import { getAccessToken } from '../../utils/StorageUtils'
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
            if (!window.navigator.onLine) {
                this.errorMessage = "Network Error"
            }
            this.getAuthStore().userSignIn()

        }
        else if (this.username === '') {
            this.errorMessage = 'enter username'
        }
        else {
            this.errorMessage = 'enter password'
        }

    }
    /*
    gotoECommerceAppIfLoggedIn = () => {
        return <Redirect
      to={{
      pathname:'/products-page'
      }}
      />
    }*/

    gotoECommerceAppIfLoggedIn = () => {
        const { history } = this.props
        if (getAccessToken() === "f5af9f51-07e6-4332-8f1a-c0c11c1e3434") {
            // history.replace({ pathname: (`/products-page`) })
            return <Redirect
      to={{pathname:'/products-page'}}/>
            alert("jsddhf")
        }
        else {
            history.replace({ pathname: (`/`) })
        }
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
            <SignIn onClick={this.onClickSignIn}>
            {(this.getAuthStore().getUserSignInAPIStatus===100)?<Loader type="Oval" color="white" height={30} width={30} />:"Sign in"}
            </SignIn>
            {(this.getAuthStore().getUserSignInAPIStatus===200)&& this.gotoECommerceAppIfLoggedIn()}
            <ErrorMessage>{this.errorMessage}</ErrorMessage>
            </SignInContainer>
            </Container>
        )
    }
}

export default withRouter(LoginPage)
