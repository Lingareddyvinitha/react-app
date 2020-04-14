import React from "react"
import { observable } from 'mobx';
import { observer } from 'mobx-react';

import { Event, Name, Location } from "./styledComponents"

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type AddEventProps={
    onAddEvent:(name:string,location1:string)=>void,
}
@observer
class AddEvent extends React.Component<AddEventProps> {
    @observable name:string;
    @observable location1:string;
    constructor(props:AddEventProps) {
        super(props)
        this.name = "";
        this.location1 = "";
    }

    onAddEvent = (event:any) => {
        const { onAddEvent } = this.props
        onAddEvent(this.name, this.location1);
        this.name = "";
        this.location1 = ""
        event.preventDefault()
    }

    onChangeEventName = (event:InputEvent) => {
        this.name = event.target.value;


    }

    onChangeEventLocation = (event:InputEvent) => {
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
