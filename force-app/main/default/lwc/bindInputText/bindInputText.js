import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'
import account_obj from '@salesforce/schema/Account'
import name from '@salesforce/schema/Account.Name'



export default class BindInputText extends LightningElement {
    myMessage = "I'm rocking";


    handleClick(){
        this.ShowToast()
    }

    ShowToast(){
            const event = new ShowToastEvent({
                title: "ACCOUNT!",
                message: "The name of acount is" ,
                variant: 'success'
            })
        this.dispatchEvent(event)    
    }
}