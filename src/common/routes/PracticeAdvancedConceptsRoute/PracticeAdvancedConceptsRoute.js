import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
import { ViewEditToggle } from '../../components/ViewEditToggle'
import { CollapseExpand } from '../../components/CollapseExpand'
import { DeviceTypeText } from '../../components/DeviceTypeText'
import { DisplayMouseCoordinates } from '../../components/DisplayMouseCoordinates'
import { MouseCoordinates } from '../../components/MouseCoordinates'
import { Heading, Container } from '../../styledComponents/PracticeAdvancedConceptsRouteStyles'
@observer
class PracticeAdvancedConceptsRoute extends React.Component {

    render() {
        return (
            <Container>
            <Heading>HOC's Usage</Heading>
            <ViewEditToggle/>
            <CollapseExpand/>
            <DeviceTypeText/>
            <Heading>Render Props Usage</Heading>
            <MouseCoordinates render={(mouse,handleMouseMove) => (
          <DisplayMouseCoordinates mouse={mouse} handleMouseMove={handleMouseMove}/>
        )}/>
           </Container>
        )
    }
}
export { PracticeAdvancedConceptsRoute }
