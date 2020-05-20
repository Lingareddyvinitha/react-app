import React from "react"
import { observable } from 'mobx'
import { observer } from "mobx-react"
import { inject } from "mobx-react"
@inject('increment', 'store')
@observer
class B extends React.Component {
    @observable name = "";
    constructor(props) {
        super(props)
        this.apple = this.props.store.apple

    }
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
            <div>apple{this.apple.title}</div>
            <div>{count}</div>
            <button onClick={this.increment}>+</button>
            </div>
        )
    }
}
export default B
