<?php
$servername = 'cse412instance.cir6ydjnoolb.us-west-2.rds.amazonaws.com';
$username = "cse_412";
$password = "mypassword";
$dbName = "cse412";
date_default_timezone_set("America/Phoenix");

$conn = new mysqli($servername, $username, $password, $dbName);
?>
