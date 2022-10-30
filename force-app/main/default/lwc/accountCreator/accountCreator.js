import { LightningElement } from 'lwc';
import showToastEvent from 'lightning/platformShowToastEvent';
import emObj from "@salesforce/schema/Employee__c"
import name from "@salesforce/schema/Employee__c.Name"
import id from "@salesforce/schema/Employee__c.Id"
import title from "@salesforce/schema/Employee__c.Title__c"
import email from "@salesforce/schema/Employee__c.Email_Address__c"


export default class AccountCreator extends LightningElement {
    
    // handleSuccess(event){
    //     const showToast = new showToastEvent({
    //         title:"Employee Created!",
    //         message: "Employee added" + event.details.id
    //     })
    //     this.dispatchEvent(showToast)
    // }

    handldeSuccess(event){
        employeeObj = emObj;
        fields = [id, name, title, email]
    }
}