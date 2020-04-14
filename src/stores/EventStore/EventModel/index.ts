import { observable, action } from 'mobx';

//import { observer } from 'mobx-react'
export type objectType={
    name:string
    location1:string
    id:number
}
class EventModel{
    id:number;
    @observable name:string;
    @observable location1:string;
    constructor(object:any) {

        this.name = object.name;
        this.location1 = object.location1
        this.id = object.id
    }
    @action.bound
    onUpdateEventDetails(name:string, location1:string) {


        //alert(name);
        //alert(this.name);
        this.name = name;
        this.location1 = location1
    }

}


export default EventModel;
