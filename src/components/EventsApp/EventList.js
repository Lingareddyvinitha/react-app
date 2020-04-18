import React from "react"

//import EventModel from '../../stores/EventStore/EventModel'
import { ShowEvents } from "./styledComponents"
import Event from './Event'

class EventList extends React.Component {

    render() {
        const { events, noOfEvents, onDeleteEvent } = this.props
        return (
            <div>
        <ShowEvents>{noOfEvents}</ShowEvents>
        {events.map(event=><Event key={event.id} event={event} onDeleteEvent={onDeleteEvent}/>)}
        </div>)
    }
}
export default EventList
