<?php
// -----------------------------Login auth script-----------------------------------

require("./consultant.inc.php");

$servername = "localhost";
$username = "root";
$password = "";
$db = 'kronosheets';

$conn = new mysqli($servername, $username, $password, $db);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// $usr = new Consultant($conn,'abc@x.com','abc');
// $usr->refreshActiveTimesheet();
// $usr->getActiveTimesheet();
// $usr->logOut();

//allows connection from any IP but only recieving requests with content-type application/json
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
//$keys = [123,999,82,3,27,99,1,88,23,5];

//if the request is empty (post request doesn't include values for pw and email)
if (empty($_POST['password']) && empty($_POST['email'])) {
    die();
}

if ($_POST)
	{
        // set response code - 200 OK
        http_response_code(200);
        $email = $_POST['email'];
        //! very very bad: password not encrypted through transfer. Will fix later on..... somehow? (:
        $UsrPassword = $_POST['password'];

        //using XAMPP as a local DB 
        User::login($email,$UsrPassword);
        
    }

?>