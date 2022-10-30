import { LightningElement } from 'lwc';
import cntObj from "@salesforce/schema/Contact"
import firstname from "@salesforce/schema/Contact.FirstName"
import lastname from "@salesforce/schema/Contact.LastName"
import email from "@salesforce/schema/Contact.Email"
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ContactCreator extends LightningElement {


    contactObj = cntObj;
    fields = [firstname, lastname, email]
    handleSuccess(event){
        const toastEvent = new ShowToastEvent({
            title: "Contact created",
            message: "Record ID: " + event.detail.id,
            variant: "success"
        });
        this.dispatchEvent(toastEvent);
    }

}