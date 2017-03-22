<?php
header("Access-Control-Allow-Origin: *");

include "server-info.php";

$stores = array();

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {

    $sql = "SELECT * FROM $dbName.`store`;";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        //return the data
        while ($row = mysqli_fetch_assoc($result)) {
            $stores[] = $row;
        }
        echo json_encode($stores);
    }

    $conn->close();
}
?>
