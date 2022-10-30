import { LightningElement } from 'lwc';
const baseURL ="https://sfdc-demo.s3-us-west-1.amazonaws.com/ecars";
const colorsList = [ 'red', 'black', 'white', 'blue', 'green'];

export default class ChangeColor extends LightningElement {
    colors = colorsList;
    selectedColor = this.colors[0]

    get selectedImage (){
        return `${baseURL}/car_${this.selectedColor}.jpg`
    }
    changeColor(event){
       this.selectedColor = event.target.dataset.color
    }
}