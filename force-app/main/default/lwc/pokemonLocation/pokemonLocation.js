import { LightningElement, api, wire} from 'lwc';
// import {getRecord, getFieldValue} from 'lightning/uiRecordApi';
// import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import { getRecord , getFieldValue} from 'lightning/uiRecordApi';
const NAME = 'Pokemon__c'
const LATITUDE = 'Pokemon__c.Location_Latitude__s'
const LONGITUDE = 'Pokemon__c.Location_Longitude__s'

const pokemonField = [NAME,LATITUDE, LONGITUDE];


export default class PokemonLocation extends LightningElement {

    @api recordId;
    mapMarkers = []
    name;
    cardTitle;

    //Using wire method  to get record it

    @wire(getRecord,{recordId: '$recordId', fields:pokemonField})
    getPokemons({  error, data}){
        
        if(error){
            console.log("THIS IS YOUR ERROR "+ error);
        }
        else if(data){
            this.name = getFieldValue(data, NAME)
            this.cardTitle = this.name;
            
            const Latitude = getFieldValue(data, LATITUDE)
            const Longitude = getFieldValue(data, LONGITUDE)
            
            thsis.mapMarkers =[{
                location: {Latitude, Longitude},
                title: this.name,
                description: `Co-ords: ${Latitude} ${Longitude}`
            }]
            
        }
        
    console.log(NAME);
    console.log(JSON.stringify(this.mapMarkers));


    }
}