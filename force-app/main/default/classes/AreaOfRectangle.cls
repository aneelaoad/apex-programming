public with sharing class AreaOfRectangle extends Shape{
    public AreaOfRectangle() {

    }

    public override void area(){
        Integer ans = getLength() * getWidth();
        System.debug('This is the area of reactangle' + ans);
    }
}
