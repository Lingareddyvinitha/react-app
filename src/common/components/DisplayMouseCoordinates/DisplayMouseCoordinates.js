import React from 'react'
import { MouseCoordinates } from '../MouseCoordinates'
import { Button, List, Container, Heading, Group } from '../../styledComponents/DisplayMouseCoordinatesStyles'
class DisplayMouseCoordinates extends React.Component {
    renderDisplayMouseCoordinates = () => {

    }
    render() {
        //console.log("this.props.mouse", this.props.mouse)
        const { mouse, handleMouseMove } = this.props

        return (
            <Container>
            <Heading>DisplayMouseCoordinates</Heading>
            <p onMouseMove={handleMouseMove}>The mouse position is{mouse.x},{mouse.y} </p>
            </Container>
        )

    }
}
export default DisplayMouseCoordinates
