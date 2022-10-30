import { LightningElement,track , wire} from 'lwc';
import getEmployeeData from '@salesforce/apex/WireDemo.getEmployeeData'

const columns =[
    {label: 'Name', fieldName:'Name' },
    {label:'Account ID', fieldName:'Id' },
    {label:'Title', fieldName:'Title__c	' }
]

export default class WireDemo extends LightningElement {

    @track columns = columns;
    @track data = [];




    @wire(getEmployeeData) 
    wiredEmployees({data, error}){
        if(data){
            this.data = data;
        }
        else{
            console.log("erroror :" + error);
        }
    }
    
    

}