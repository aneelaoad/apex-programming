public class ApexDatabaseClassMethod {
    public ApexDatabaseClassMethod() {

    }
    public static void addRecords(){

        List<Account> accList = new List<Account>();

        Account obj1 = new Account();
        Account obj2 = new Account();

        obj1.Name = 'Ram';
        obj1.Name = 'Charan';
    
        accList.add(obj1);
        accList.add(obj2);

        // Saving the account list into Database using the class 'Database' and it's method 'Save.Result[]'
        // as an array
        // Database.insert(accList, false) inserts the record into database. We are saving the inserted records in
        // insertedList array

        Database.SaveResult[] insertedList = Database.insert(accList, false);

        for (Database.SaveResult sr : insertedList) {
            
            if(sr.isSuccess()){

                System.debug('SUCCESSFULLY INSERTED THE ACCOUNT WITH ID: ' + sr.getId());
            }
            else{
                for (Database.Error err : sr.getErrors()) {
                    System.debug(err.getStatusCode() + ':' + err.getMessage());
                }
            }
        }
    }
    public static void updateRecords(){

        List<Account> accList = new List<Account>();
        Account ac1 = [SELECT Name, Id, Phone FROM Account WHERE Id = '0015g000014CGELAA4'];
        Account ac2 = [SELECT Name, Id, Phone FROM Account WHERE Id = '0015g000014CGEKAA4'];
        ac1.Name ='Ram Charan';
        ac2.Name= 'Mega Power Star';

        accList.add(ac1);
        accList.add(ac2);

        Database.update(accList, false);

    }
}
