public class NewCaseListController {
    public List<Case> getNewCases(){
        List<Case> caseList = Database.query('Select Id, CaseNumber from Case where status = \'new\'');
        return caseList;
    }
}