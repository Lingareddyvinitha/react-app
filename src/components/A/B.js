import React from "react"
import { observable } from 'mobx'
import { observer } from "mobx-react"
import { inject } from "mobx-react"

import C from './C'
@inject('temp')
@observer
class B extends React.Component {
    @observable name = "";
    onChangeName = (event) => {
        this.name = event.target.value;
    }
    render() {
        const { temp } = this.props
        console.log(temp)
        return (
            <div>
            <div>{temp}</div>
            <input value={this.name} onChange={this.onChangeName} />
            <C name="props"/>
            </div>
        )
    }
}
export default B
