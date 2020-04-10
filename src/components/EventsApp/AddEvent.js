import React from "react"
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Event, Name, Location } from "./styledComponents.js"
@observer
class AddEvent extends React.Component {
    @observable name;
    @observable location1;
    constructor(props) {
        super(props)
        this.name = "";
        this.location1 = "";
    }

    onAddEvent = (event) => {
        const { onAddEvent } = this.props
        onAddEvent(this.name, this.location1);
        this.name = "";
        this.location1 = ""
    }

    onChangeEventName = (event) => {
        this.name = event.target.value;


    }

    onChangeEventLocation = () => {
        this.location1 = event.target.value;

    }
    render() {
        return (<Event>
        <Name type="text" value={this.name} onChange={this.onChangeEventName}></Name>
        <Location type="text" value={this.location1} onChange={this.onChangeEventLocation}></Location>
        <button onClick={this.onAddEvent}>Add event</button>
        </Event>)
    }
}
export default AddEvent
