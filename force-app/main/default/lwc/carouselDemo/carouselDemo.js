import { LightningElement, track } from 'lwc';
import assets from '@salesforce/resourceUrl/assets'


console.log(carousel_images);

export default class CarouselDemo extends LightningElement {


     data = [
        {
            id:'1',
            src: assets + '/images/ALBUMS.PNG',
            header: 'card 1'
        },
        {
            id:'2',
            src: assets + '/images/SPRING.PNG',
            header: 'card 2'

        }
    ]

}