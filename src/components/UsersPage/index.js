import React from 'react'
import { observer, inject } from 'mobx-react'
import LoadingWrapperWithFailure from '../common/LoadingWrapperWithFailure'
import NoDataView from '../common/NoDataView'

@inject("userStore")
@observer
class UsersPage extends React.Component {

    componentDidMount() {
        this.doNetworkCalls()
    }
    getUserStore = () => {
        return this.props.userStore
    }

    doNetworkCalls = () => {
        this.getUserStore().getUsersAPI()
    }

    renderUsersList = () => {
        const { users } = this.getUserStore()
        if (users.length === 0) {
            <NoDataView/>
        }
        return users.map((userName) => <div>{userName}</div>)
    }
    render() {
        const { getUserApiStatus, getUserApiError } = this.getUserStore()
        return (
            <LoadingWrapperWithFailure
            apiStatus={getUserApiStatus}
            apiError={getUserApiError}
            onRetryClick={this.doNetworkCalls}
            renderSuccessUI={this.renderUsersList}
            />
        )
    }
}

export default UsersPage
