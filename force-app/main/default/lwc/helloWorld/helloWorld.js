import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {
     greetings = 'World';
     changeHandler(event){
         this.greetings = event.target.value;
     }
}