<?php
header("Access-Control-Allow-Origin: *");

include "server-info.php";

$customers = array();

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    $customerName = $_REQUEST["customerName"];

    $sql = "SELECT * FROM person
            JOIN customer ON person.PID = customer.mId
            WHERE person.name LIKE '{$customerName}%'";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        //return the data
        while ($row = mysqli_fetch_assoc($result)) {
            $customers[] = $row;
        }
        echo json_encode($customers);
    }

    $conn->close();
}
?>
