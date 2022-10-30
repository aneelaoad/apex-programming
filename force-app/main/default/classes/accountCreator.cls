@RestResource(urlMapping='/go/*')
global with sharing class accountCreator {
 
    @HTTPGET
    global static List<Account> getAccount() {
        RestRequest accountRequest = RestContext.request;
        String accountURI = accountRequest.requestURI;
        Map<String, String> accountParams = accountRequest.params;
        Integer AccountLimit = Integer.valueOf(accountParams.get('limit'));
        String active = accountParams.get('active');
        List<Account> result = [SELECT ID, Name FROM Account WHERE Active__c =: active Limit : AccountLimit];
        return result;
    }

    @HTTPDELETE
    global static Map<String, String> deleteAccount(){
        Map<String,String> response = new Map<String,String>();
        RestRequest accountRequest = RestContext.request;
        String accountURI = accountRequest.requestURI;
        Id accountId = Id.valueOf(accountURI.substring(accountURI.lastIndexOf('/')+1));
        Account acc = new Account (Id = accountId);
       try{
           delete acc;
           response.put('Succuess', '1');
       }
       catch(DmlException ex){
        response.put('Not', '0');
        response.put('message', ex.getMessage());

       }
       return response;
    }    
}