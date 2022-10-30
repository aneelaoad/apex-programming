import { api, LightningElement } from 'lwc';

export default class Pagination extends LightningElement {
    totalRecords;
    recordSize = 5;

    @api records;
    get records(){
        return this.visibleRecords
    }
    set records(data){
        if(data){
            this.totalRecords  = data
            this.visibleRecords = data.slice(0, this.recordSize)
            this.totalPages = Math.round(data.length/this.recordSize)
            this.updateRecords()
        }
    }
    PrevHandler(){}
    NextHandler(){}

    updateRecords(){
        this.dispatchEvent( new CustomEvent ('update', {
            detail:{
                records: this.visibleRecords

            }
        }))
    }
}