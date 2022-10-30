@isTest
private class ParkLocatorTest {
    @isTest static void testCallout() {              
        // This causes a fake response to be generated
        Test.setMock(WebServiceMock.class, new ParkServiceMock());
        // Call the method that invokes a callout
        String country = 'US';
            
        List<String> result = ParkLocator.country(country);
        List<String> parks = new List<String>();
        parks.add('Yellow stone');
        parks.add('Black stone');
        parks.add('rani baag');
        // Verify that a fake result is returned
        System.assertEquals(parks, result); 
    }
}