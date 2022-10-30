import { track, LightningElement } from 'lwc';

export default class TrackDecorator extends LightningElement {

    @track fullname ={
        firstname: "",
        lastname: ""
    }
    handleChange(event){
        const feild = event.target.name;
        
        if(feild === "firstname"){
            this.fullname.firstname = event.target.value
        }
        else{
            this.fullname.lastname = event.target.value
        }
    }
    
}