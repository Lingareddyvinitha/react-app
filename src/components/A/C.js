import React from "react"


class C extends React.Component {
    render() {
        const { name } = this.props
        return (
            <div>
            <div>{name}</div>
            </div>
        )
    }
}
export default C
