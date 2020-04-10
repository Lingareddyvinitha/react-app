import React from "react"
import AddEvent from "./AddEvent.js"
import EventList from "./EventList.js"
import eventStore from '../../stores/EventStore'
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
