import { api, LightningElement, track } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api message =0 ;
    // @api
    // takeValue( getValue){
    //     this.message = getValue;
    // }

    @api summation(event){
        // const val = event.target.value
        this.message = this.message + 10;
    }
    subract(){
        this.dispatchEvent( new CustomEvent('subcustomevent'))
    }
// -----------------------------
    add(){
        this.dispatchEvent( new CustomEvent('addcustomevent'))
    }
    // ----------------------------
    multiplyThree(event){
        const value = event.target.value
        this.dispatchEvent( new CustomEvent('multipythree', {
            detail: value
        }))
    }
    divide(event){
        const val = event.target.value;
        this.dispatchEvent( new CustomEvent('divide', {
            detial: val
        }))
    }
}