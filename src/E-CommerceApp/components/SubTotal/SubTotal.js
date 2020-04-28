import React from 'react'

class SubTotal extends React.Component {
    render() {
        const { total } = this.props
        return (
            <SubTotal>SUBTOTAL:{total}
</SubTotal>
        )
    }
}
