import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { Button, Input, Container, Group, Heading } from '../../styledComponents/ViewEditToggleStyles'
import { withToggle } from '../../hocs/withToggle'
@observer
class ViewEditToggle extends React.Component {
    @observable value = 'Click on the edit button to start editing'
    @observable toggleStatus
    constructor(props) {
        super(props)
        this.toggleStatus = this.props.toggleStatus

    }

    changeTheInputValue = () => {
        this.value = event.target.value
    }
    onEditOrCancle = () => {
        const { onToggle } = this.props
        onToggle()

    }

    render() {
        const { toggleStatus } = this.props
        return (
            <Container>
            <Heading>ViewEditToggle</Heading>
            <Group>
            <Input value={this.value} onChange={this.changeTheInputValue} disabled={toggleStatus}/>
            <Button onClick={this.onEditOrCancle}>{(toggleStatus)?"Edit":"Cancle"}</Button>
            </Group>
            </Container>
        )
    }
}
export default withToggle(ViewEditToggle)
