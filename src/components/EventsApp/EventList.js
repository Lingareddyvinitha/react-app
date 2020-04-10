import React from "react"
import { ShowEvents } from "./styledComponents.js"
import { observer } from 'mobx-react'
import Event from './Event.js'
@observer
class EventList extends React.Component {

    render() {
        const { events, noOfEvents, onDeleteEvent } = this.props
        return (<div>
        <ShowEvents>{noOfEvents}</ShowEvents>
        {events.map(event=><Event key={event.id} event={event} onDeleteEvent={onDeleteEvent}/>)}
        </div>)
    }
}
export default EventList
