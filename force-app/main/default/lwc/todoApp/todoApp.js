import { LightningElement,track } from 'lwc';

export default class TodoApp extends LightningElement {
    @track value="Here";
    getData(event){

        this.value = event.target.value;
    }
}