({
    doInit: function(component, event, helper){
        let action = component.get("c.getItems");
        action.setCallBack(this, function(response){
            let state = response.getState()
            
            if(state==="success"){
                component.set("v.items", response.getReturnValue())
            }
            else{
                console.log("LOL Error.")
            }
        })
        $A.enqueueAction(action)
    },    handleAddItem: function(component, event, helper) {

        var item = event.getParam("item");

                

        var action = component.get("c.saveItem");

        action.setParams({

            "item": item

        });

        

        action.setCallback(this, function(response){

            var state = response.getState();

            if (component.isValid() && state === "SUCCESS") {        

                var items = component.get("v.items");

                items.push(item);

                component.set("v.items",items);

            }

        });

        $A.enqueueAction(action);

    }

    

})