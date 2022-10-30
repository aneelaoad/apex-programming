import { LightningElement } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
export default class NavigateToComponents extends NavigationMixin(LightningElement) {

navToAuraC(){
    this[NavigationMixin.Navigate]({
        type:'standard__component',
        attributes:{
            componentName:'c__NavToAura'
        },
        state:{
            c__recordId : '12345'
        }
    })
}
}