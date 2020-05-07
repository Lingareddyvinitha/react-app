import React from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter, Redirect } from "react-router-dom";
import { getAccessToken } from '../../utils/StorageUtils';
import SignInPage from '../../components/SignInPage'
@inject("authStore")
@observer
class SignInRoute extends React.Component {
    @observable username = ""
    @observable password = ""
    @observable errorMessage = ''
    getAuthStore = () => {
        return this.props.authStore
    }

    getAuthStore = () => {
        return this.props.authStore
    }

    onChangeUsername = (event) => {
        this.username = event.target.value
        this.errorMessage = ""
    }

    onChangePassword = (event) => {
        this.password = event.target.value
        this.errorMessage = ""
    }

    onClickSignIn = () => {
        if (this.username !== '' && this.password !== '') {
            this.errorMessage = ''
            /*
            if (!window.navigator.onLine) {
                this.errorMessage = "Network Error"
            }*/
            this.getAuthStore().userSignIn()
            console.log("click");

        }
        else if (this.username === '') {
            this.errorMessage = 'enter username'
        }
        else {
            this.errorMessage = 'enter password'
        }

    }

    gotoECommerceAppIfLoggedIn = () => {
        if (getAccessToken() === "f5af9f51-07e6-4332-8f1a-c0c11c1e3434") {
            return <Redirect
      to={{pathname:'/products-page'}}/>
        }
    }
    render() {
        return (
            <SignInPage 
            onChangeUsername={this.onChangeUsername}
            onChangePassword={this.onChangePassword}
            onClickSignIn={this.onClickSignIn}
            username={this.username}
            password={this.password}
            errorMessage={this.errorMessage}
            getUserSignInAPIStatus={this.getAuthStore().getUserSignInAPIStatus}
            gotoECommerceAppIfLoggedIn={this.gotoECommerceAppIfLoggedIn}
            />
        )
    }
}

export { SignInRoute }
