@RESTResource(urlMapping='/CreateLead/')
global class CreateLeadAPI {
    @HTTPPost 
    global static String doPost (){
		String fName , lName, comp;
        RestRequest req =  RestContext.request;
		RestResponse res = RestContext.response;
		String jsonBody = req.requestBody.toString();
	  
        JSONParser parser = JSON.createParser(jsonBody);
        While(parser.nextToken() != null){
            
        }
        return 'Hi';
    }
}