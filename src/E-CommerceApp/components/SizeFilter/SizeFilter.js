import React from 'react'
import { Container, XS, S, M, L, XL, XXL } from '../../styledComponents/SizeFilterStyles'
import { observer } from 'mobx-react'
import { observable } from 'mobx'

@observer
class SizeFilter extends React.Component {
    @observable clicked = false
    onSelectSize = (event) => {
        let addOrDelete = ''
        if (event.target.name === 'unClicked') {
            this.clicked = true
            event.target.name = 'clicked'
            addOrDelete = 'add'
        }
        else {
            event.target.name = 'unClicked'
            this.clicked = false
            addOrDelete = 'delete'
        }
        const { onSelectSize } = this.props
        onSelectSize(event.target.value, addOrDelete)
    }
    render() {
        return (
            <Container onClick={this.onSelectSize}>
            <XS value='XS' name='unClicked'>XS</XS>
            <S value='S' name='unClicked'>S</S>
            <M value='M' name='unClicked'>M</M>
            <L value='L' name='unClicked'>L</L>
            <XL value='XL' name='unClicked'>XL</XL>
            <XXL value='XXL' name='unClicked'>XXL</XXL>
            </Container>
        )
    }

}

export default SizeFilter
