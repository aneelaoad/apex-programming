public virtual class Shape {
    public Shape() {

    }

   Private Integer length = 10;
   Private Integer width= 12;

   public virtual void area(){

    System.debug('Area of:');
   }
   // get length
   public virtual Integer getLength(){
    return length;
   }
   public virtual Integer getWidth(){
    return width;
   }
}
