public with sharing class EmployeeTableController {
    
    @AuraEnabled(cacheable = true)
    public static List<Employee__c> getEmployees (){
        return [SELECT Name, Designation__c, Title__c	FROM Employee__c];
    }
}