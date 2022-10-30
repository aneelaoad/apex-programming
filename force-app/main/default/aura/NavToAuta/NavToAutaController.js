({
    init : function(component, event, helper) {
        var pageRef = component.get("v.pageReference");
        var id = pageRef.state.c__recordId
        component.set("v.id", id)
    }
})