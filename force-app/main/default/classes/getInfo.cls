public  class getInfo {
    
    @AuraEnabled
    public static List<Account> getEmployees(){

        List<Account> result = [SELECT Id, Name, (SELECT Name, FirstName, LastName FROM Contacts) FROM Account ORDER BY Id ASC LIMIT 10];
        // return  result;

        if(!result.isEmpty()){
            return result;
        }

        return null;
    }
}