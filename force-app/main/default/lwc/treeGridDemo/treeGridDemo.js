import { LightningElement, track, wire } from 'lwc';
import dataInfo from '@salesforce/apex/getInfo.getEmployees'
export default class TreeGridDemo extends LightningElement {

    @track gridCols = [
        {
            type:"text",
            fieldName: 'Name',
            label:'Name'
        },
        {
            type:"text",
            fieldName: 'FirstName',
            label:'FirstName'
        },
        {
            type:"text",
            fieldName: 'LastName',
            label:'LastName'
        },
    ]

    @track gridData

    connectedCallback(){
        dataInfo()
        .then(data => {
            
            var tempContact = JSON.parse(JSON.stringify(data))
            
            for (var i = 0; i < tempContact.length; i++) {
                var newContact = tempContact[i]['Contacts'];
                
                if(newContact){
                    tempContact[i]._children = newContact



                }
            }
            this.gridData = tempContact
            console.log("New :" + JSON.stringify(this.gridData));

        })
        .catch(err => {
            console.log('Error => ' + err);
        })
    }
}