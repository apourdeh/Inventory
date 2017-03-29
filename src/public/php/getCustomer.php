<?php
header("Access-Control-Allow-Origin: *");

include "server-info.php";

$customer = array();

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    $customerId = $_REQUEST["customerId"];

    $sql = "SELECT P.name, P.email, Cu.mId, Cu.age
            FROM customer AS Cu
            JOIN person AS P on P.PID = Cu.mId
            WHERE Cu.mId = $customerId";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        //return the data
        while ($row = mysqli_fetch_assoc($result)) {
            $customer[] = $row;
        }
        echo json_encode($customer);
    }

    $conn->close();
}
?>
