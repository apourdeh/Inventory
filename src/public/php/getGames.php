<?php
header( "Access-Control-Allow-Origin: *" );

include "server-info.php";

$games = array();

if ( $conn->connect_error ) {
	die( "Connection failed: " . $conn->connect_error );
} else {

	$sql = "SELECT DISTINCT G.name, G.rating, G.ESRB, G.releaseDate, Co.name AS console, G.gameId
	FROM game AS G
	JOIN copy AS C
	on C.copyOf = G.gameId
	JOIN console AS Co on Co.name = C.playedOn";

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
