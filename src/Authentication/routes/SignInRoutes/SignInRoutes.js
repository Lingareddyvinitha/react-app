import React from 'react'
import { observable } from 'mobx'
import { observer, inject } from 'mobx-react'
import { withRouter, Redirect } from 'react-router-dom'
import { getAccessToken } from '../../utils/StorageUtils'
import SignInPage from '../../components/SignInPage'

@inject('authStore')
@observer
class SignInRoute extends React.Component {
   signFormRef = React.createRef()
   @observable username = ''
   @observable password = ''
   @observable errorMessage = ''

   /*    
        getAuthStore = () => {
            return this.props.authStore
        }
        */

   getAuthStore = () => {
      return this.props.authStore
   }

   onChangeUsername = event => {
      this.username = event.target.value
      this.errorMessage = ''
      if (event.keyCode == 13) {
         this.signFormRef.current.passwordRef.current.focus()
      }
   }
   /*
    changeFocusToPassword = (event) => {
        
    }*/

   onChangePassword = event => {
      this.password = event.target.value
      this.errorMessage = ''
      if (event.keyCode == 13) {
         this.signFormRef.current.passwordRef.current.focus()
      }
   }

   onClickSignIn = event => {
      event.preventDefault()
      console.log('onClickSignIn')
      if (this.username !== '' && this.password !== '') {
         this.errorMessage = ''
         /*
            if (!window.navigator.onLine) {
                this.errorMessage = "Network Error"
            }*/
         this.getAuthStore().userSignIn()
      } else if (this.username === '') {
         this.errorMessage = 'Please enter username'
         this.signFormRef.current.userNameRef.current.focus()
      } else {
         this.errorMessage = 'Please enter password'
         this.signFormRef.current.passwordRef.current.focus()
      }
   }

   gotoECommerceAppIfLoggedIn = event => {
      event.preventDefault()
      console.log('gotoECommerceAppIfLoggedIn', getAccessToken())
      if (getAccessToken() === 'f5af9f51-07e6-4332-8f1a-c0c11c1e3434') {
         const { history } = this.props
         history.replace('/products-page')
         console.log('history changed')
      }
      console.log('gotoECommerceAppIfLoggedIn after history changes')
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
            changeFocusToPassword={this.changeFocusToPassword}
            ref={this.signFormRef}
         />
      )
   }
}

export default withRouter(SignInRoute)
