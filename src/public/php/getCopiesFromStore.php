<?php
header("Access-Control-Allow-Origin: *");

include "server-info.php";

$store = array();

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
    $storeId = $_REQUEST["storeId"];
    $rating = $_REQUEST["rating"];

    if ($rating == null) {
      $sql = "SELECT C.id, G.name, C.price, C.condition, G.ESRB, C.playedOn
              FROM copy AS C
              JOIN game AS G on C.copyOf = G.gameId
              JOIN store AS S on C.location = S.storeNumber
              WHERE S.storeNumber = $storeId AND NOT EXISTS (
                SELECT * FROM purchase AS P
                WHERE C.id = P.copyId
              )";
    } else {
    $sql = "SELECT C.id, G.name, C.price, C.condition, G.ESRB, C.playedOn
            FROM copy AS C
            JOIN game AS G on C.copyOf = G.gameId
            JOIN store AS S on C.location = S.storeNumber
            WHERE S.storeNumber = $storeId AND NOT EXISTS (
              SELECT * FROM purchase AS P
              WHERE C.id = P.copyId
            )
            AND G.ESRB = '$rating'";
    }

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
