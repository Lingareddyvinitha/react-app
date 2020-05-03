import { observable, action, computed, reaction, autorun } from 'mobx'
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { setAccessToken, clearUserSession } from '../../utils/StorageUtils'

class AuthStore {
    @observable getUserSignInAPIStatus
    @observable getUserSignInAPIError
    constructor(AuthAPIService) {
        this.authAPIService = AuthAPIService
        this.init()
    }

    @action.bound
    init() {
        this.getUserSignInAPIStatus = API_INITIAL
        this.getUserSignInAPIError = null
    }

    @action.bound
    userSignIn(gotoECommerceAppIfLoggedIn) {
        const userSignInAPI = this.authAPIService.getUserSignInAPI()
        bindPromiseWithOnSuccess(userSignInAPI)
            .to(this.setUserSignInAPIStatus, this.setUserSignInAPIResponse)
            .catch(this.setUserSignInAPIError)
    }

    @action.bound
    setUserSignInAPIResponse(response) {
        setAccessToken(response[0].access_token)

    }

    @action.bound
    setUserSignInAPIError(error) {
        this.getUserSignInAPIError = error
    }

    @action.bound
    setUserSignInAPIStatus(status) {
        this.getUserSignInAPIStatus = status
    }

    @action.bound
    userSignOut() {
        clearUserSession()
    }
}

export default AuthStore
