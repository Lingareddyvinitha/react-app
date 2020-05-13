import React from "react"
import { observer } from 'mobx-react'
@observer
class C extends React.Component {
    static defaultProps = {
        name: "react",
    };
    render() {
        alert("c")
        const { name } = this.props
        return (
            <div>
            <div>{name}</div>
            
            </div>
        )
    }
}



export default C
