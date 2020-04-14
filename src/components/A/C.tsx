import React from "react"

type CProps={
    name:string
}
class C extends React.Component <CProps>{
    render() {
        const {name} = this.props
        return (
            <div>
            <div>{name}</div>
            </div>
        )
    }
}
export default C
