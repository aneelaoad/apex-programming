import { LightningElement, wire } from 'lwc';
import { subscribe, MessageContext } from 'lightning/messageService';
import OPERATION_CHANNEL from '@salesforce/messageChannel/First__c'


export default class Sub extends LightningElement {

    val = 0
    subscription = null
    @wire(MessageContext)
    messageContext 
    

    connectedCallback(){
        this.subscribeToMessageChannel();

    }
    subscribeToMessageChannel(){
        this.subscription = subscribe(
            this.messageContext,
            OPERATION_CHANNEL,
            (message) => handleMessage(message)

        )
    }
    handleMessage(message){
        alert(JSON.stringify(message))
        console.log(message);

        // log
    }
}