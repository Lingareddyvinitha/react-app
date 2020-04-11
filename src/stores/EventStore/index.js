import { observable, action, computed, reaction, toJS } from 'mobx';
import { observer } from 'mobx-react';
import EventModel from './EventModel'
class EventStore {
    @observable events = [];
    @action.bound
    onAddEvent(name, location1) {
        const object = {
            name,
            location1: location1,
            id: Math.floor(Math.random() * 100)
        }
        const eventModel = new EventModel(object);
        this.events.push(eventModel);


    }
    @action.bound
    onDeleteEvent(deletedEventId) {
        this.events = this.events.filter((event) =>
            event.id != deletedEventId
        );

    }
    @computed get noOfEvents() {
        return this.events.length

    }

}

const eventStore = new EventStore()
export default eventStore;
