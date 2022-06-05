<?php
require("./user.inc.php");

class AdminRepo{
    private static $instance = null;
    private static $timesheets = [];
    private static $admins = [];
    private static $consultants = [];
    private static $consultantLineManagers = [];
    private static $financeTeamMembers = [];
    private static $users = array(0 => $admins, 1 => $consultants, 2 => $consultantLineManagers, 3 => $financeTeamMembers);

    private function __construct()
    {
        //singleton
    }

    public static function getInstance(){
        if (AdminRepo::$instance == null){
            AdminRepo::$instance = new AdminRepo();
        }
        return AdminRepo::$instance
    }

    //! really shitty search algo with O(n^2) time complexity, fix it later maybe?
    public static function searchAccount($name = null, $userID = null){
        foreach (AdminRepo::$users as &$userType) {
            foreach ($userType as &$user) {
                if ($user->getUserID() == $userID){
                    return $user;
                }
            }
        }

        return false;
    }
}
?>