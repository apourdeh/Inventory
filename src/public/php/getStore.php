<?php
header("Access-Control-Allow-Origin: *");

include "server-info.php";

$store = array();

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    $storeId = $_REQUEST["storeId"];

    $sql = "SELECT * FROM $dbName.`store` WHERE `storeNumber` = $storeId;";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        //return the data
        while ($row = mysqli_fetch_assoc($result)) {
            $store[] = $row;
        }
        echo json_encode($store);
    }

    $conn->close();
}
?>
