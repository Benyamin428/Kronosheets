<?php
require("./user.inc.php");
require("./timesheet.inc.php");

class Consultant extends user{
    // Properties
    private $Timesheets = [];
    private $draftTimesheets = [];
    private $dailyRate = 0;
    private $activeTimesheet = null;

    // Methods
    public function __construct($conn,$UN = "", $PWD = ""){
        parent::__construct($conn,$UN,$PWD);
        
        $this->userName = $UN;
        $this->password = sha1($PWD);
    }

    private function getDBTimesheets(){
        $conn = parent::getDB();
        $this->userID = $this->queryDatabase("");
    }

    public function requestStatements($name) {
        //TODO
    }

    public function getActiveTimesheet() {
        echo json_encode(new Timesheet((int)date("Y"),(int)date("m"),(int)(intval(date("W")) - intval(date("W", strtotime(date("Y-m-01"))))+1)));
    }

    public function viewWeeklySummary() {
        //TODO
    }

    public function refreshActiveTimesheet() {
        echo (int)intval(date("W")) - intval(date("W", strtotime(date("Y-m-01"))));
        $this->activeTimesheet = new Timesheet((int)date("Y"),(int)date("m"),(int)(intval(date("W")) - intval(date("W", strtotime(date("Y-m-01"))))+1));
        $this->queryDatabase("INSERT INTO blah blah");
        array_push($this->Timesheets, $this->activeTimesheet);
    }

    public function submitTimesheet(){
        //TODO
    }

    public function editPastDay(int $month, int $year, int $weekno): Timesheet{
        //TODO
        return null;
    }
    public function previewActiveTimesheet(){
        //TODO
    }
    public function editDay(Timesheet $timesheet){
        //TODO
    }
    public function savedraft(){
        //TODO
    }
    public function addHours(float $time, Timesheet $timesheet){
        //TODO
    }
    private function calculateDailyRate(){
        //TODO
    }
    private function selectActiveDay(int $dayNum){
        //TODO
    }
    private function addLineManager(){
        //TODO
    }
    public function editDraft(){
        //TODO
    }
}
?>