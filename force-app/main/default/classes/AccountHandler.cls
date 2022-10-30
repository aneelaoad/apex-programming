public class AccountHandler {
    public static void insertAccount(Integer num){
        List <Account> addAccounts = new List<Account>();
        Integer counter = 4;
        while( num <=counter){
            Account store = new Account();
            store.Name='Acme Inc N';
            store.AccountNumber = 'A000n';
            
            addAccounts.add(store);
            num++;
            System.debug(addAccounts);
        }
        insert addAccounts;
    }
}