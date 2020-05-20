import React from 'react'
import { Button, List, Container, Heading, Group } from '../../styledComponents/CollapseExpandstyles'
import { withToggle } from '../../hocs/withToggle'
class CollapseExpand extends React.Component {
    onClickExapandOrCollapse = () => {
        const { onToggle } = this.props
        onToggle()
    }
    render() {
        const { toggleStatus } = this.props
        return (
            <Container>
            <Heading>
            CollapseExpand
            </Heading>
            <Group>
            <lable>Sample Shopping List:</lable>
            <Button onClick={this.onClickExapandOrCollapse}>{(toggleStatus)?"Expand":"Collapse"}</Button>
            </Group>
            <List toggleStatus={toggleStatus}>
            <li>Eggs</li>
            <li>Bread</li>
            </List>
            </Container>
        )
    }
}
export default (withToggle(CollapseExpand))
