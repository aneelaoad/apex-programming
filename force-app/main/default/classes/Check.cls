public class Check {
    public static void getAccounts (){
        
        List<Account> accountsList = [SELECT Id, Name, AccountNumber FROM Account];
        for(Account acc: accountsList){
            System.debug('Accounts Name:' + acc);
        }
    }
}