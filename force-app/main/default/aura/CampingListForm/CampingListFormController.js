({
	clickCreateItem : function(component, event, helper) {
        if(helper.validateItemForm(component)){
           let newItem = component.get("v.newItem")
             helper.createItem(component, newItem)
           }
	}
})