public class NewAccounts {
    
    public static void addObjects (Integer value){
        Integer counter = 1;
		List <Account> accountsList = new List<Account>();

            while(counter <= value){
                Account store1 = new Account();
                Account store2 = new Account();
                store1.Name='Tea Maker' + counter;
                store1.AccountNumber = '32' + counter;
                
                store2.Name='Coffee Maker' + counter;
                store2.AccountNumber = '22' + counter;
                accountsList.add(store1);
                accountsList.add(store2);
                counter++;
				System.debug('Account list :' + accountsList);
/*   				System.debug('Counter is :' + counter);	
				System.debug('Store:' + store);	*/
            }
        insert accountsList;
        				System.debug('Account list 2 :' + accountsList);

    }
}