trigger DuplicateEmailAlert on Contact (before insert, before update) {

    Set<String> setEmail = new Set<String>();
    Set<String> setExistingEmail = new Set<String>();

    for (Contact contact : Trigger.new) {
        
        setEmail.add(contact.Email);
    }
    for (Contact cont : [SELECT Email FROM Contact WHERE EMAIL in: setEmail]) {
        setExistingEmail.add(cont.Email);

    }
    for (Contact addCont : Trigger.new) {
        if (Trigger.isInsert || Trigger.isUpdate) {
            if(setExistingEmail.contains(addCont.Email)){
                addCont.addError('This Email is being already used');
            }
        }
    }
}