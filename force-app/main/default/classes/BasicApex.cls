public class BasicApex {

    public static void justValues(){
      BasicInnerClass obj = new BasicInnerClass();
        
        // obj.property = 32;
        System.debug( obj.property);
    }


    //-----Inner Class----

    public class BasicInnerClass{

        public Integer property{
        // List<Account> listName = [SELECT Name FROM Account];

            get{ return 5;   }
            // set{ property = value;  }
    }
    }

}