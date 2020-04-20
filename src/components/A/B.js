import React from "react"
import { observable } from 'mobx'
import { observer } from "mobx-react"
import { inject } from "mobx-react"

import C from './C'
@inject('increment')
@observer
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
        const { count } = this.props
        return (
            <div>
            <div>{count}</div>
            <button onClick={this.increment}>+</button>
            <input value={this.name} onChange={this.onChangeName} />
            <C name="props"/>
            </div>
        )
    }
}
export default B
