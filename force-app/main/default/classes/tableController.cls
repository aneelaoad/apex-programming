public with sharing class tableController {
   
    @AuraEnabled(cacheable = true)
    public static List<Account>  getAccounts(){
        return [SELECT  Name, AnnualRevenue, Industry, Phone from Account];
    }  

}