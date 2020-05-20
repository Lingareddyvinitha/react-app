import React from 'react'
import { withScreenSizeDetectors } from '../../hocs/withScreenSizeDetectors'
import { Container, Heading } from '../../styledComponents/DeviceTypeTextStyles'
class DeviceTypeText extends React.Component {
    render() {
        const { display } = this.props
        return (
            <Container>
        <Heading>DeviceTypeText</Heading>
        <lable>Device Type:{display}</lable>
        </Container>
        )
    }
}
export default withScreenSizeDetectors(DeviceTypeText)
