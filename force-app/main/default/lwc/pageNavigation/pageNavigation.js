import { LightningElement,api} from 'lwc';
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils'	
import { NavigationMixin } from 'lightning/navigation';

export default class PageNavigation extends NavigationMixin(LightningElement) {
    @api recordId;

     navigateToChatter() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'chatter'
            },
        });
    }

    navigateToAccount() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            },
        });}


    navigateToHome() {
        this[NavigationMixin.Navigate]({            
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home',
                
            },
        });}


        navigateToNewContact(){
            const defaultValues = encodeDefaultFieldValues({
                FirstName: 'Heer',
                LastName: 'Kharwar'
            })
            this[NavigationMixin.Navigate]({
                type: 'standard__recordPage',
                attributes:{
                    recordId : '0035g000004Dy7tAAC',
                    objectApiName: 'Contact',
                    actionName: 'view'
                },
                // state:{
                // defaultFieldValues:defaultValues    
                // }
                // state:{
                //     filterName: 'Recent'
                // }
            })
        }




}