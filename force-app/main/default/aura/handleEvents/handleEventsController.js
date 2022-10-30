({
	handleClick : function(component, event, helper) {
        let btnClicked = event.getSource();         // the button
        let btnMessage = btnClicked.get("v.label"); // the button's label
        component.set("v.alert", btnMessage);     // update our message
    //var btn = event.getSource();
      //      var msg = btn.get("v.label");
    //    component.set("v.alert", msg);
	}
})