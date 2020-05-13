import React from 'react'
import { Container, XS, S, M, L, XL, XXL, Label, Group } from '../../styledComponents/SizeFilterStyles'
import { observer } from 'mobx-react'
import { observable } from 'mobx'
import Size from '../Size'

@observer
class SizeFilter extends React.Component {
    renderEachSize = () => {
        const { availableSizes, onSelectSize } = this.props
        return availableSizes.map(size =>
            <Size eachSize={size} key={size} onSelectSize={onSelectSize}/>
        )
    }
    render() {
        return (
            <Container>
            <Label>Sizes:</Label>
            <Group>
            {this.renderEachSize()}
            </Group>
            </Container>
        )
    }

}

export default SizeFilter
