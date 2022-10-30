({

    createItem : function (component,newItem){

        var createItem = component.getItem("createItem");

        createItem.setParams({"item":item});

        createItem.fire();

        component.set("v.newItem",{'sObjectType':'Camping_Item__c',

                                   'Name':'',

                                   'Quantity__c':0,

                                   'Price__c':0,

                                   'Packed__c':false});

    },

    validateItemForm: function(component) {

		

              // Simplistic error checking

        var validItem = true;



        // Name must not be blank

        var nameField = component.find("itemname");

        var itemname = nameField.get("v.value");

        if ($A.util.isEmpty(itemname)){

            validItem = false;

            nameField.set("v.errors", [{message:"Item name can't be blank."}]);

        }

        else {

            nameField.set("v.errors", null);

        }

        

        // Quantity must not be blank

        var quantityField = component.find("quantity");

        var quantity = nameField.get("v.value");

        if ($A.util.isEmpty(quantity)){

            validItem = false;

            quantityField.set("v.errors", [{message:"Quantity can't be blank."}]);

        }

        else {

            quantityField.set("v.errors", null);

        }

		// Price must not be blank

        var priceField = component.find("price");

        var price = priceField.get("v.value");

        if ($A.util.isEmpty(price)){

            validItem = false;

            priceField.set("v.errors", [{message:"Price can't be blank."}]);

        }

        else {

            quantityField.set("v.errors", null);

        }

            return validItem;



	},

    createItem: function(component, event, helper){
        let createItem = component.get("v.createItem")
        createItem.setParam({
            "item": item
        })
        createItem.fire();
        component.set("V.newItem", {
            'sObjectType': 'Camping_Item__c',
            'Name':'',
            'Quantity__c':0,
            'Price__c': 0,
            'Packed__c ':false
            
        })
    }

})