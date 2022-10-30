({
	createExpense : function(component, expense) {
		let theExpense = component.get("v.expenses");
        let newExp = JSON.parse(JSON.stringify(expense));
        theExpense.push(newExp)
        component.set("v.expenses", theExpenses)
    }
})