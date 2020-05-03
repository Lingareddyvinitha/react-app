import React from 'react'
import { SizeButton } from '../../styledComponents/SizeStyles'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

@observer
class Size extends React.Component {
    @observable isClicked = false
    onSelectSize = () => {
        this.isClicked = !this.isClicked
        const { onSelectSize, eachSize } = this.props
        onSelectSize(eachSize.size, this.isClicked)

    }
    render() {
        const { eachSize } = this.props
        return (
            <SizeButton onClick={this.onSelectSize} isClicked={this.isClicked}>{eachSize.size}</SizeButton>
        )
    }

}

export default Size
