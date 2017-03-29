<?php
header( "Access-Control-Allow-Origin: *" );

include "server-info.php";

$games = array();

if ( $conn->connect_error ) {
	die( "Connection failed: " . $conn->connect_error );
} else {

	$sql = "SELECT * FROM game ORDER BY name";


	$result = $conn->query( $sql );

	if ( $result->num_rows > 0 ) {
		//return the data
		while ( $row = mysqli_fetch_assoc( $result ) ) {
			$games[] = $row;
		}
		echo json_encode( $games );
	}

	$conn->close();
}
?>
