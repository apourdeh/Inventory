<?php
header( "Access-Control-Allow-Origin: *" );

include "server-info.php";

$purchases = array();

if ( $conn->connect_error ) {
	die( "Connection failed: " . $conn->connect_error );
} else {

  $customerId = $_REQUEST["customerId"];

  $sql = "SELECT * FROM purchase
					JOIN copy on copy.id = purchase.copyId
					JOIN game on game.gameId = copy.copyOf
					WHERE customerId = $customerId";

	$result = $conn->query( $sql );

	if ( $result->num_rows > 0 ) {
		//return the data
		while ( $row = mysqli_fetch_assoc( $result ) ) {
			$purchases[] = $row;
		}
		echo json_encode( $purchases );
	}

	$conn->close();
}
?>
