({
    doInit: function(component, event, helper){
        let action = component.get("c.getExpenses");
        
        action.setCallBack(this, function(response){
            let state = response.getState()
            if(state === "success"){
                component.set("v.expense", reponse.getReturnValue())
            }
            else{
                console.log("Error")
            }
        })
        $A.enqueueAction(action);
    }
})















/* ({
	clickCreate: function(component, event, helper) {
        		console.log("hello")

        let validExpense = component.find('expenseForm').reduce(function(validSoFar, inputCmp){
            
                        inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;

        }, true);
        
                if(validExpense){
            // Create the new expense
            let newExpense = component.get("v.newExpense");
            console.log("Create expense: " + JSON.stringify(newExpense));
            helper.createExpense(component, newExpense);
        }

	}
})

*/