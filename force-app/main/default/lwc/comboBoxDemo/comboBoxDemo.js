import { LightningElement, track,wire } from 'lwc';
import getAcc from '@salesforce/apex/ComboBoxData.getAcc';
import getContacts  from '@salesforce/apex/ComboBoxData.getContacts';



const COLS = [
    {
        label: "Contact Name", fieldName : 'Name'
    },
    {
        label: "Contact Email", fieldName : 'Email'
    }
]
export default class ComboBoxDemo extends LightningElement {
   
   @track value = ""
    @track getResult = []    
   @track columns = COLS
    @track Data = []

    get options() {
        return this.getResult
        
    }

    handleChange(event){
        let val = event.target.value;
        this.value = val
        
        getContacts( { selectedAccId: this.value})
        .then( response => {
          this.Data = response  
        })
        .catch( err => {
            window.alert("Wrong")

        })
        
    }

    connectedCallback(){
        getAcc().then(result =>{
            console.log(result);
            let arr = []
            for (let i = 0; i < result.length; i++) {
                arr.push({ label: result[i].Name, value: result[i].Id
                })
                
            }
            this.accountsData = result.map(item =>{
                return {...item}
            })

            this.getResult = arr;

        }).catch(err =>{
            console.log(err);
        })
    }
}