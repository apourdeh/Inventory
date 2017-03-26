<?php
header("Access-Control-Allow-Origin: *");

include "server-info.php";

$customers = array();

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {

    $sql = "SELECT P.name, P.email, Cu.mId
            FROM customer AS Cu
            JOIN person AS P on P.PID = Cu.mId";

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
