import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/DataController.getContactList'

export default class Pagination extends LightningElement {
    totalContacts
    visibleContacts

    totalAccounts
    visibleAccounts
    @wire(getContactList)
    wiredContact({error, data}){
        if(data){ 
            this.totalContacts = data
            console.log(this.totalContacts)
        }
        if(error){
            console.error(error)
        }
    }
    updateContactHandler(event){
        this.visibleContacts=[...event.detail.records]
        console.log("LOL" + event.detail.records)

    }
    

}