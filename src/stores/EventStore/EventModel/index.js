import { observable, action } from 'mobx';
//import { observer } from 'mobx-react'
class EventModel {
    id;
    @observable name;
    @observable location1;
    constructor(object) {

        this.name = object.name;
        this.location1 = object.location1
        this.id = object.id
    }
    @action.bound
    onUpdateEventDetails(name, location1) {


        //alert(name);
        //alert(this.name);
        this.name = name;
        this.location1 = location1
    }

}


export default EventModel;
