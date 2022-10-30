import { LightningElement } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import ACCOUNT_OBJ from '@salesforce/schema/Account'
import NAME_FIELD from '@salesforce/schema/Account.Name'
import ID_FIELD from '@salesforce/schema/Account.Id'


export default class CreateRecord extends LightningElement {
    accountId
    name = ''
    count = false

    handleNameChange(event){
        this.name = event.target.value;

    }

    handleCreateAccount(event){
        const fields  = {};
        fields[NAME_FIELD.fieldApiName] = this.name
        fields[ID_FIELD.fieldApiName] = this.accountId
        console.log("yo " +JSON.stringify(fields));

        const recordInput = {ApiName: ACCOUNT_OBJ.objectApiName,
            fields
        }
        
        createRecord(recordInput).then(acc => {
        this.recordId = acc.id
    })
    this.count = true
    }
}