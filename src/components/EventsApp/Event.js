import React from "react"
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import EventModel from '../../stores/EventStore/EventModel'
import { EventName, EventLocation } from "./styledComponents"



@observer
class Event extends React.Component {
    @observable isEditEvent;
    @observable eventName;
    @observable eventLocation;
    constructor(props) {
        super(props)
        this.isEditEvent = false;
        this.eventName = props.event.name;
        this.eventLocation = props.event.location1;
    }
    onDeleteEvent = () => {
        const { onDeleteEvent, event } = this.props;

        onDeleteEvent(event.id);

    }
    onChangeEventName = (event) => {
        this.eventName = event.target.value;
    }
    onChangeEventLocation = (event) => {
        this.eventLocation = event.target.value;
    }
    onUpdateEventDetails = () => {
        if (this.isEditEvent === false) {
            this.isEditEvent = true;
        }
        else {
            const { event: { onUpdateEventDetails } } = this.props;
            onUpdateEventDetails(this.eventName, this.eventLocation);
            this.isEditEvent = false;
        }
    }
    render() {
        return (
            <div>
            <EventName type="text" value={this.eventName} onChange={this.onChangeEventName} disabled={!this.isEditEvent}></EventName>
            <EventLocation type="text" value = {this.eventLocation} onChange={this.onChangeEventLocation} disabled={!this.isEditEvent}></EventLocation>
            {this.isEditEvent === false && 
            <div>
            <button onClick={this.onUpdateEventDetails}>edit</button>
            <button onClick={this.onDeleteEvent}>delete</button>
            </div>
            }
            {this.isEditEvent ===false ||
                <button onClick={this.onUpdateEventDetails}>update</button>
            }
            </div>
        )

    }
}
export default Event
