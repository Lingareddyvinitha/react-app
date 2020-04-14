import React from "react"
import { observer } from 'mobx-react'

import eventStore from '../../stores/EventStore'
import AddEvent from "./AddEvent"
import EventList from "./EventList"

@observer
class EventsApp extends React.Component {
    render() {
        return (<div>
            <AddEvent onAddEvent={eventStore.onAddEvent}/>
            <EventList events={eventStore.events} 
            onDeleteEvent={eventStore.onDeleteEvent} 
            noOfEvents={eventStore.noOfEvents}/>
        </div>)
    }
}
export default EventsApp
