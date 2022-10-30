public class WireDemo {
	@AuraEnabled(cacheable = true)
    
    public static List <Employee__c> getEmployeeData(){

        List<Employee__c> playerDetails = [Select Id, Name, Title__c from Employee__c];
        return playerDetails;

    }

}