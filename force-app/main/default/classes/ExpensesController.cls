public with sharing class ExpensesController {
	@AuraEnabled
    public static List <Expense__c> getExpenses(){
        return [ SELECT Id, Name, Amount__c, Client__c, Date__c,
                       Reimbursed__c, CreatedDate from Expense__c
               ];
    }
}