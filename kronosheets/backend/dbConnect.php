<?php
$servername = "localhost";
$username = "root";
$password = "";
$db = 'kronosheets';

$conn =  new mysqli($servername, $username, $password, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    throw new ErrorException("database could not connect! ):", 0, E_WARNING, __FILE__, 24);
}
?>