import { LightningElement, track, wire } from 'lwc';
import getAll from '@salesforce/apex/ImperativeMethod.getAll'

const columns =[
    { label: "ID", fieldName: "Id"},
    {label: "Name", fieldName: "Name"},
    {label: "Title", fieldName: "Title__c"},
    
]
export default class ImperativeMethod extends LightningElement {

    @track columns = columns;
    @track data = [];

    connectedCallback(){
        getAll()
        .then(result => {
            this.data = result
        })
        .catch(err =>{
            console.log(err);
        })
    }
}