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
            .to(this.setGetUserSignInAPIStatus, this.setGetUserSignInAPIResponse)
            .catch(this.setGetUserSignInAPIError)
    }

    @action.bound
    setGetUserSignInAPIResponse(response) {
        setAccessToken(response[0].access_token)

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
        this.init()
    }
}

export default AuthStore
