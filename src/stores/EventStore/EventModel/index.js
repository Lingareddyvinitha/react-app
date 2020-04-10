import { observable } from 'mobx';
class EventModel {
    id;
    @observable name;
    @observable location1;
    constructor(object) {
        this.name = object.name;
        this.location1 = object.location1
        this.id = object.id
    }
    onUpdateEventDetails() {

    }

}


export default EventModel;
