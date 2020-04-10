import React from "react"
import { EventName, EventLocation } from "./styledComponents.js"
import { observable } from 'mobx';
import { observer } from 'mobx-react';
@observer
class Event extends React.Component {
    @observable isEditEvent;
    @observable eventName;
    @observable eventLocation;
    constructor(props) {
        this.isEditEvent = false;
        this.eventName = this.props.event.name;
        this.eventLocation = this.props.event.location1;
    }
    onDeleteEvent = () => {

    }
    onChangeEventName = () => {

    }
    onChangeEventLocation = () => {

    }
    onUpdateEventDetails = () => {

    }
    render() {
        return (
            <div>
            <EventName type="text" value={this.eventName}></EventName>
            <EventLocation type="text" value = { this.eventLocation } ></EventLocation>
            <button onClick={this.onUpdateEventDetails}>edit</button>
            <button on>delete</button>
            </div>
        )
    }
}
export default Event
