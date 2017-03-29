<?php
header( "Access-Control-Allow-Origin: *" );

include "server-info.php";

$game = array();

if ( $conn->connect_error ) {
	die( "Connection failed: " . $conn->connect_error );
} else {
	$gameId = $_REQUEST["gameId"];
	
	$sql = "SELECT G.name, G.description, C.playedOn, S.address, S.storeNumber, COUNT(*) AS inventory 
	  		FROM game AS G  
			JOIN copy AS C ON G.gameId = C.copyOf 
		    JOIN store AS S ON C.location = S.storeNumber 
			WHERE G.gameId = $gameId 
			AND NOT EXISTs 
			( 		
			   SELECT * FROM purchase AS P
			   WHERE C.id = P.copyID 
			) 
			GROUP BY S.storeNumber, C.playedOn";


	$result = $conn->query( $sql );

	if ( $result->num_rows > 0 ) {
		//return the data
		while ( $row = mysqli_fetch_assoc( $result ) ) {
			$game[] = $row;
		}
		echo json_encode( $game );
	}

	$conn->close();
}
?>