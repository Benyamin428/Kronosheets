<?php
require("./status.inc.php");
require("./day.inc.php");

class Timesheet{
    private $month;
    private $year;
    private $weekNo;
    private $active = true;
    private $status = Status::UNRESOLVED;
    private $workDays = [];

    public function __construct(int $Yno = null, int $Mno = null, int $Wno = null){
        $this->month = $Mno;
        $this->year = $Yno;
        $this->weekNo = $Wno;
        $this->genDays();
    }

    private function genDays(){
        $days = ["Monday","Tuesday","Wednesday","Thurday","Friday","Saturday","Sunday"];
        for ($i = 0; $i < 7; $i++) {
            array_push($this->workDays, new workDay($days[$i]));
        }
    }

    public function selectDay(int $dayNum){
        print_r($this->workDays);
    }

    public function isActive(): bool{
        return $this->active;
    }

    public function getStatus(){
        return $this->status;
    }

    public function saveDraft(){
        //TODO
    }

    public function makePast(){
        $this->active = false;
    }

    public function submitTimesheet(){
        //TODO
    }


}
?>