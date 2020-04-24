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
    userSignIn() {
        const userSignInAPI = this.authAPIService.getUserSignInAPI()
        return bindPromiseWithOnSuccess(userSignInAPI)
            .to(this.setGetUserSignInAPIStatus, this.setUserSignInAPIResponse)
            .catch(this.setGetUserSignInAPIError)
    }

    @action.bound
    setUserSignInAPIResponse(response) {
        setAccessToken(response)

    }

    @action.bound
    setGetUserSignInAPIError(error) {
        this.getUserSignInAPIError = error
    }

    @action.bound
    setGetUserSignInAPIStatus(status) {
        this.getUserSignInAPIStatus = status
    }

    @action.bound
    userSignOut() {
        clearUserSession()
    }
}

export default AuthStore
