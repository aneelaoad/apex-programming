public class AccountUtility {
    public static void viewAnnualRevenue(){
        
        List<Account> accountsList = [SELECT Name, AnnualRevenue FROM Account];
        for(Account act: accountsList){
            String acctRev  = 'account name: ' + act.Name + ', Annual Revenue: ' + act.AnnualRevenue;
            System.debug(acctRev );
        }
        
    }
}