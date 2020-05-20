import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'
@observer
class MouseCoordinates extends React.Component {

    @observable coordinates = { x: 0, y: 0 }

    handleMouseMove = (event) => {
        this.coordinates = {
            x: event.clientX,
            y: event.clientY

        }
    }

    render() {

        return (
            <div>
        {this.props.render(this.coordinates,this.handleMouseMove)}
      </div>
        );
    }
}

export default MouseCoordinates
