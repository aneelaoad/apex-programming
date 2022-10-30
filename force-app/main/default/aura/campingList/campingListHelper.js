({
	createItem : function(component, item) {
		let action = component.get("c.saveItem");
        
        action.setParams({
            'item': item
        })
        action.setCallBack(this, function(response){
            let state = action.getState();
            
            if(state==="success"){
                let items = component.get("v.items")
                items.push(response.getReturnValue())
                component.set("v.items", items)
            }
        })
	}
})