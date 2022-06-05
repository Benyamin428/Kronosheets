<?php
require("./login.inc.php");

abstract class User {
    // Properties
    private $DBCONN;
    private $userID;
    private $firstName;
    private $loginDetails = Null;

    public function __construct($conn,$usr,$pwd)
    {
        $this->DBCONN = $conn;
        $this->userID = $this->queryDatabase("SELECT userID from users WHERE email = '".$usr."' AND pass = '".sha1($pwd)."'");
        $this->addLID($usr,$pwd);
    }

    public function queryDatabase(string $query){
        $res = mysqli_query($this->DBCONN,$query);
        if ($res){
            return mysqli_fetch_assoc($res)['userID'];
        }
        return -1;
    }

    public function getDB(){
        return $this->DBCONN;
    }

    public function addLID($UN = "", $PWD = ""){
        $this->loginDetails = new Login($UN,$PWD);
        $this->queryDatabase("UPDATE users SET loggedin = 1 WHERE userID = '".$this->userID."'");
    }

    // Methods
    public function logOut() {
        $this->loginDetails = Null;
        $this->queryDatabase("UPDATE users SET loggedin = 0 WHERE userID = '".$this->userID."'");
    }

    public function getUserID() {
        return $this->userID;
    }

    public function get_name() {
        return $this->firstName;
    }

    static function verifyInformation($usrName,$pwd){
        // Create connection
        $servername = "localhost";
        $username = "root";
        $password = "";
        $db = 'kronosheets';

        $conn = new mysqli($servername, $username, $password, $db);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        
        //only 1 table so far in my test DB (user)
        $sql = "SELECT userID FROM users WHERE email = '".$usrName."'
            AND pass = '".$pwd."'";
        
        $result = mysqli_query($conn,$sql);

        if (mysqli_num_rows($result) > 0){
            return true;
        }
        else {
            return false;
        }
    }

    static function login($usrName,$pwd){
        if (User::verifyInformation($usrName,$pwd)){
            echo json_encode(true);
        }
        else {echo json_encode(false);
        }
    }
};
?>