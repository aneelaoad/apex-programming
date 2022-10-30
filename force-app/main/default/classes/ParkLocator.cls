public class ParkLocator {
    public static List<String> country (String count){
	ParkService.ParksImplPort parkservice = new ParkService.ParksImplPort();
        return parkservice.byCountry(count);
    }
}