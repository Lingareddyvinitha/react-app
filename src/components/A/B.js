import React from "react"
import { observable } from 'mobx'
import { observer } from "mobx-react"
import { inject } from "mobx-react"
@inject('increment')
class B extends React.Component {
    @observable name = "";
    onChangeName = (event) => {
        this.name = event.target.value;
    }
    increment = () => {
        const { increment } = this.props
        increment()
    }
    render() {
        alert("b")
        const { count } = this.props
        return (
            <div>
            <div>{count}</div>
            <button onClick={this.increment}>+</button>
            </div>
        )
    }
}
export default B
