import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/tableController.getAccounts'
// import getEmployees from '@salesforce/apex/EmployeeTableController.getEmployees';

const COLS = [
    {label: 'Account Name', fieldName: 'Name'},
    {label: 'Annual Revenue' , fieldName: 'AnnualRevenue',type: 'currency',
        cellAttributes:{ Class:{fieldName: 'nameColor'}}
    },
    {label: 'Industry', fieldName: 'Industry', type: 'text'},
    {label: 'Phone',    fieldName:'Phone', type:'phone'},
    {label: "Id", fieldName: "Id"}
]



export default class DatatableDemo extends LightningElement {

    tableData 
    cols = COLS
    @wire (getAccounts) 
    
    accountsHandler({data, error}){
        if(data){
            this.tableData = data.map(item =>{
                let nameColor=  item.AnnualRevenue > 50000000 ? "slds-text-color_error" : " slds-text-color_success"

                return {...item, "nameColor" :nameColor}
            })
            console.log(this.tableData);
        }
        if(error){
            console.log(error);
        }
    }

    

}