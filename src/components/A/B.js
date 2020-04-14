import React from "react"
import { observable } from 'mobx'
import {  observer } from "mobx-react"
import { inject } from "mobx-react"

import C from './C'
type InputEvent = React.ChangeEvent<HTMLInputElement>;
type BProps={
    temp:string
}
@inject('temp')
@observer
class B extends React.Component<BProps> {
    @observable name:string = "";
    onChangeName = (event:InputEvent): void=> {
        this.name= event.target.value;
    }
    render() {
        const { temp } = this.props
        console.log(temp)
        return (
            <div>
            <input value={this.name} onChange={this.onChangeName} />
            <C name={this.name}/>
            </div>
        )
    }
}
export default B
