public class ComboBoxData {
    @AuraEnabled
    public static List<Account> getAcc () {
        List<Account> result = [SELECT Id, Name FROM Account];

        return result;
    }
    @AuraEnabled 
    public static List<Contact> getContacts (String selectedAccId){

        List<Contact> contactList = [SELECT Id, AccountId, Name, Email FROM Contact WHERE AccountId =: selectedAccId ];
        return contactList;
    }
}