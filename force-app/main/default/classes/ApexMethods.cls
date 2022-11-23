public with sharing class ApexMethods {
    public ApexMethods() {

    }

    public static void setValues(){
        String x;
        System.debug('First Value: '+x);
        showValues(x);
        System.debug('Second Value: '+x);
        //
        List<Integer> emptyList = new List<Integer>();        
        showListValues(emptyList);
    
    }
    public static void showValues(String a){
        a='yo';
        System.debug('passed value: '+ a);
    }
    public static void showListValues( List<Integer> x){
        x.add(10);
        x.add(20);
        x.add(40);
        System.debug(x);
    }
}