public with sharing class DataController {
    
    @AuraEnabled(cacheable= true)
    public static List<Contact> getContactList(){
        return [SELECT Id, Name FROM Contact];
    }
}