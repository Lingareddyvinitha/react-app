/*global fetch*/
import { observable, action } from 'mobx'
import { API_INITIAL, API_FETCHING, API_SUCCESS, API_FAILED } from '@ib/api-constants'

import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'

class UserStore {
    @observable getUserApiStatus
    @observable getUserApiError
    @observable users
    userService
    constructor(userService) {
        this.userService = userService
        this.init()
    }

    @action.bound
    setUsersAPIResponse(usersResponse) {
        this.users = usersResponse.map((user) => user.name)
    }

    @action.bound
    setUsersAPIError(error) {
        this.getUserApiError = error
    }

    @action.bound
    setUsersAPIStatus(apiStatus) {
        this.getUserApiStatus = apiStatus
    }


    @action.bound
    getUsersAPI() {

        const usersPromise = this.userService.getUsersAPI()
        return bindPromiseWithOnSuccess(usersPromise)
            .to(this.setUsersAPIStatus, this.setUsersAPIResponse)
            .catch(this.getUserApiError)

    }

    @action.bound
    clearStore() {
        this.init()
    }

    @action.bound
    init() {
        this.getUserApiStatus = API_INITIAL

    }
}


export default UserStore
