import { LightningElement , api} from 'lwc';
import SendMsgTemp from '@salesforce/apex/WhatsAppController.SendMsgTemp'
export default class SendWhatsAppMsg extends LightningElement {


    @api recordId
    sendMsgTemplate(){
        SendMsgTemp( {contactId : this.recordId})
        .then(result => {
            window.alert("Message sent successfully!")
        })
        .catch( error => {
            window.alert("FAILED!")
        })
    }
}