import { LightningElement } from 'lwc';

export default class TabSetsDemo extends LightningElement {

    tabContent = ''
    handleChange(event){
        this.tabContent = event.target.value

        console.log(this.tabContent);
    }
}