import React from "react"
import { observable } from 'mobx'
import { Provider, observer } from "mobx-react"
import { inject } from "mobx-react"
import C from './C.js'
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
            <input value={this.value} onChange={this.onChangeName} />
            <C name={this.name}/>
            </div>
        )
    }
}
export default B
