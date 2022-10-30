@RestResource(urlMapping='/Accounts/*/contacts')
global with sharing class AccountManager {
    @HttpGet
    global static Account  getAccount() {
        RestRequest request = RestContext.request;
        // grab the accountId from the end of the URL
      //  String AcntId = request.requestURI.substring(request.requestURI.lastIndexOf('/')+1);
     // String accountId = request.requestURI.substringBetween('Accounts/','/contacts/');
       List<String> lst = request.requestURI.split('/');                
        String strAccId = lst[lst.size() - 2];
        
       Account  result =  [SELECT Id, Name, (SELECT Id, Name from Contacts) FROM Account WHERE Id = :strAccId];
        return result;
    }
}