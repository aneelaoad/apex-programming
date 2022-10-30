import { api, LightningElement } from 'lwc';
import SendMsgTemp from '@salesforce/apex/WhatsAppController.SendMsgTemp'
export default class WhatsAppButton extends LightningElement {

    @api recordId

    onSendButton(){
        SendMsgTemp({contactId: this.recordId})
        .then(result =>{
            window.alert("DONE!")
        })
        .catch( err => {
            window.alert("Failed! :(")
        })
    }
}