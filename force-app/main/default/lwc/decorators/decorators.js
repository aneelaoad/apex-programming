import { api, LightningElement } from 'lwc';

export default class Decorators extends LightningElement {
   @api itemValue = "Salesforce Expert"

   @api handleChange (){
       this.itemValue = "This is the updated value"
   }
}