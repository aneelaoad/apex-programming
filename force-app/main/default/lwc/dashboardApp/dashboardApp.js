import { LightningElement, track } from 'lwc';
const URL = "https://services9.arcgis.com/N9p5hsImWXAccRNI/arcgis/rest/services/Z7biAeD8PAkqgmWhxG2A/FeatureServer/1/query?f=json&where=Confirmed+%3E+0&outFields=Country_Region%2CConfirmed%2CDeaths%2CRecovered%2CLast_Update%2CActive&orderByFields=Confirmed+desc"
import {loadStyle, loadScript} from 'lightning/platformResourceLoader'


const initialData ={
    total_deaths:0,
    total_confirmed: 0,
    total_recovered: 0,
    total_active: 0,
    total_fatalityRate:0,
    total_recoveryRate:0
}

const COLUMNS = [
    {
        label:'Country Name' , fieldName : 'Country'
    },
    {
        label:'Confirmed' , fieldName : 'Confirmed'
    },
    {
        label:'Deaths' , fieldName : 'deaths'
    },
    {
        label:'Recovered' , fieldName : 'recovered'
    },
    {
        label:'Active' , fieldName : 'active'
    },
    {
        label:'Fatality Rate' , fieldName : 'f_rate'
    },
    {
        label:'Recovery Rate' , fieldName : 'r_rate'
    },
    {
        label:'Last Updated' , fieldName : ''
    }
]

// const data = [
//     {
//         id:'1'
//     }
// ]
export default class DashboardApp extends LightningElement {


   @track chartInitialized = false 
   @track total = initialData;
   @track defaultView = 'LIST'
   @track showListView = true
   @track tableData = []
   @track filteredData = []

   columns = COLUMNS
    get isListSelect(){
        return this.defaultView ==='LIST'? 'active' :''
    }
    get isChartSelect(){
        return this.defaultView ==='CHART'? 'active' :''
    }
   changeView(event){
    this.defaultView = event.target.dataset.name;

    const view = event.target.dataset.name;

       if(view =='LIST'){
           this.showListView = true
       }
       if(view == 'CHART'){
        this.showListView = false

       }
    
   }
   
    connectedCallback(){
        this.fetchData()

    }
    renderedCallback(){
        if(this.chartInitialized){
            return;
        }
        else{
            this.chartInitialized = true
            Promise.all([
                loadScript(this, 'https://code.highcharts.com/highcharts.js')
            ]).then(() => {
                this.initializedChart()
            }).catc((err) => {
                console.log("THIS IS THE ERROR: " +err);
            })
        }
    }
    async fetchData(){
        let response = await fetch(URL)
        let data = await response.json()
        // console.log(JSON.stringify(data));
        this.formatData(data)
        this.data = data
    }
    formatData(result){
        // console.log(JSON.stringify('OUTPUT = ' + result.featur.Deaths));

        // console.log(JSON.stringify(result['attributes'].Country_Region));
        let individualSum ={}


        result.features.forEach( data => {

           let item = data["attributes"] 
           let obj ={
               Confirmed: item.Confirmed,
               Active: item.Active,
               Deaths: item.Deaths,
               Recovered: item.Recovered,
               LastUpdated: item.Last_Updated
           }
           if(item.Country_Region in individualSum){
                individualSum[item.Country_Region].Confirmed +=obj.Confirmed
                individualSum[item.Country_Region].Deaths +=obj.Deaths
                individualSum[item.Country_Region].Active +=obj.Active
                individualSum[item.Country_Region].Recovered +=obj.Recovered
           }
           else{
               individualSum[item.Country_Region] = obj
           }

           this.total.total_deaths += item.Deaths 
           this.total.total_confirmed += item.Confirmed 
           this.total.total_active += item.Active 
           this.total.total_recovered += item.Recovered 
           
        })
        // console.log(JSON.stringify(this.total));

        this.total.total_recoveryRate = this.getRecoveryRate().toFixed(2)
        this.total.total_fatalityRate = this.getFalalityRate().toFixed(2)
        // console.log(parseInt(this.total.total_recoveryRate));


    let activeColor = item.Recovered > item.Confirmed ? 'activeColorClass': ''


           let finalData =  Object.keys(individualSum).map(item => {
            let ITEM = individualSum[item]

            let formatedDate = new Date(ITEM.Last_Updated).toDateString()
            let Fatality_rate = this.getFalalityRate(ITEM).toFixed(2)
            let Recovery_rate = this.getRecoveryRate(ITEM).toFixed(2)

            return {...item, "CleanDate":formatedDate,"f_rate": Fatality_rate, "r_rate": Recovery_rate,
                    "Country": item, "active": ITEM.Active, 'recovered': ITEM.Recovered,
                    'deaths': ITEM.Deaths, 'Confirmed': ITEM.Confirmed,
                    'activeColorClass': activeColor
                }
        })
        // console.log(JSON.stringify(finalData));
        this.tableData = [... finalData]
        
    }

    
    getFalalityRate(item){
        if(item){
            return (item.Deaths/item.Confirmed)*100
        }
        else{
        return (this.total.total_deaths/this.total.total_confirmed)*100

        }
    }
    getRecoveryRate(item){
        if(item){
            return (item.Recovered/item.Confirmed)*100
        }
        else{
        return (this.total.total_recovered/this.total.total_confirmed)*100

        }
    }

// ------------------------------
// ------------------------------
    getFalalityRate(){
        return (this.total.total_deaths/this.total.total_confirmed)*100

    }
    getRecoveryRate(){

        return (this.total.total_recovered/this.total.total_confirmed)*100
    }

    searchHandler(event){
        console.log("OUTPUT: " +this.tableData.Country_Region);

        console.log(event.target.value);
        let input = event.target.value
        console.log(input.trim());
        if(input.trim()){
       let newData= this.tableData.filter(item => {
                let country = item.Country ?  item.Country.toLowerCase() :item.Country 
                // console.log(country);
              
                return country.includes(input)
            })
            this.filteredData = [...newData]
        }

        else{
            this.filteredData = [...this.tableData]
        }
    }

    initializedChart(){
        this.template.querySelector('.chartContainer')
        Hightcharts.charts('container', {
            charts: {
                type: 'column'
            },
            title:{
                text:'Covid Report'
            },
            xAxis:{
                categories: ['Confirmed', 'Active', 'Deaths', 'Recovered']
            }
        })
    }
}