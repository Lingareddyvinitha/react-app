import { observable, action, computed } from 'mobx';


import EventModel from './EventModel'
import {objectType} from './EventModel'

class EventStore {
    @observable events:Array<EventModel>;
    
    constructor(){
        this.events=[];
    }
    
    @action.bound
    onAddEvent(name:string, location1:string) {
        const object:objectType = {
            name,
            location1,
            id: Math.floor(Math.random() * 100)
        }
        const eventModel = new EventModel(object);
        this.events.push(eventModel);


    }
    @action.bound
    onDeleteEvent(deletedEventId:number) {
        this.events = this.events.filter((event) =>
            event.id != deletedEventId
        );

    }
    @computed get noOfEvents() {
        return this.events.length

    }

}

const eventStore:EventStore = new EventStore()
export {eventStore as default};
