import React from 'react'
import { Container, Sorting, Label } from '../../styledComponents/ProductSortStyles'
import { observer } from 'mobx-react'

@observer
class ProductSort extends React.Component {
    onSelectSortBy = (event) => {
        const { onSelectSortBy } = this.props
        alert(event.target.value)
        onSelectSortBy(event.target.value)
    }
    render() {
        return (
            <Container>
            <Label>Sort price by:</Label>
            <Sorting onChange={this.onSelectSortBy}>
            <option value="SELECT">Select</option>
            <option value="DESCENDING">HeighestToLowest</option>
            <option value="ASCENDING">LowestToHeighest</option>
            </Sorting>
            
            </Container>
        )
    }

}

export default ProductSort
