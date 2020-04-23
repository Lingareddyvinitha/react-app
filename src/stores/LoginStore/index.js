import { observable, action } from 'mobx'
class LoginStore {
    @observable token = ""

    @action.bound
    createToken() {
        alert("token created")
        this.token = 123
    }
}

export default LoginStore
