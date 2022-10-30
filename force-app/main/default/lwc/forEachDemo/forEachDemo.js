import { LightningElement, wire,track } from 'lwc';
import getEmployees from '@salesforce/apex/getInfo.getEmployees'
export default class ForEachDemo extends LightningElement 
{
    @track Data = []
    @wire(getEmployees) employees



}