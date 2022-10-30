public class WhatsAppController {
	@AuraEnabled
    public static Boolean SendMsgTemp(String contactId){
        
        Contact contactDetails = [SELECT Id, Phone FROM Contact WHERE Id=:contactId ];
        
        String WhatsappNumber = '92' +  contactDetails.Phone;
        
        Http http = new Http();
        HttpRequest req = new HttpRequest();
        
        req.setEndpoint('https://graph.facebook.com/v13.0/101708669270716/messages');
        req.setHeader('Content-Type', 'application/json');
        req.setMethod('POST');
        
        String body = '{"messaging_product": "whatsapp", "to": "'+WhatsappNumber +'","type": "template", "template": {"name": "hello_world", "language": {"code": "en"} } }';
      	req.setBody(body); 
        
        String apiToken = 'EAAIuZBHAZB3BoBAKTLtykaclc7PKeiHHlevq4cBvbpKIAFoaw9JrWk4hs3TzeOGaNxVy1RA2ispctGM4OWyZBYLFZA8PFXm5cOMu6ymkOqmZBZBsyjcoRJpb1yHxqSWFctKEl15ZCHwgZCXK5v4gbAkB1yywQ226gFukBLY7AxFSslCYb2qjFOEBwhVIx1qcvxSc5kY2ZCx5w2AZDZD';
    
    	req.setHeader('Authorization', 'Bearer ' + apiToken);
        
        
        HttpResponse res = http.send(req);
        
        if(res.getStatusCode()==200){
            return true;
                
        }
        return false;
    } 
    
}