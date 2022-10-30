public class ImperativeMethod {
    
    
	@AuraEnabled
    public static List <Employee__c> getAll(){
        
        List<Employee__c> result = [select id, Name, Title__c from Employee__c];
        return result;
    }
}