import { LightningElement, track } from 'lwc';

export default class Conditions extends LightningElement {
    @track label = "show"
   @track cardToggle = false
    toggleChange(event){
        const lbl = event.target.label;
        if(lbl === "show"){
            this.label = "hide"
            this.cardToggle = true
        }
        else{
            this.label ="show"
            this.cardToggle = false
        }
    }
}