public with sharing class dynamicApex {

    // public Account createAccount(String accountName, String accountNumber, String tickerSymbol) {
    //     Account newAcct = new Account(
    //         Name = accountName,
    //         AccountNumber = accountNumber,
    //         TickerSymbol = accountNumber
    //       );
    //       return newAcct;
    // }

    public static List<Account> getAccounts(){

        return [SELECT Id, Name from Account];
    }
}