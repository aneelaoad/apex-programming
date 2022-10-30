import { LightningElement,track } from 'lwc';

export default class ParentComponent extends LightningElement {


    // @track 
    @track count 
    // takeInput(event){
    //     counter = event.target.value
    // }

    takeInput(event){
        this.count = parseInt(event.target.value)

    //    const msg =  this.template.querySelector('c-child-component').takeValue(event.target.value);
    //    this.counter = event.target.value
       
        }
        sum(){
        this.template.querySelector('c-child-component').summation();

        }
//    @track counter= 0;
//     handleSub(){
//         this.counter = this.counter-1
//         if(this.counter <0){
//             this.counter = 0
//         }
        
//     }
//     handleAdd(){
//         this.counter = this.counter+1
//     }
//     handleMul(event){
//         const count = event.detail
//         this.counter = this.counter*count
//     }
//     handleDivide(event){
//         const count = event.detail;
//         this.counter = this.counter/count
//     }
}