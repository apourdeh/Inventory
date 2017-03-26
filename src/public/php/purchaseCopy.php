<?php
header("Access-Control-Allow-Origin: *");
if (!isset($_REQUEST['copyId']) || empty($_REQUEST['customerId'])) {
    die("?");
}
include "server-info.php";

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {

    $copyId = $_REQUEST["copyId"];
    $customerId = $_REQUEST["customerId"];
    $date = date('Y-m-d');

    $sql = "INSERT INTO `purchase` (`customerId`, `copyId`, `date`) VALUES ('$customerId', '$copyId', '$date');";

    if ($conn->query($sql) === TRUE) {

    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
}
?>
