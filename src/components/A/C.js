import React from "react"
import { inject, observer } from "mobx-react"
@inject('temp')
class C extends React.Component {
    render() {
        const { temp, name } = this.props

        console.log(name)
        return (
            <div>
            {temp}
            </div>
        )
    }
}
export default C
