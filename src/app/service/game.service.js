gameService.$inject = ['$http', '$apiUrl'];

export default function gameService($http, $apiUrl) {

	return {
		getGames: getGames,
		getGame: getGame
	};

	function getGames() {
		return $http.get($apiUrl + "getGames.php")
			.then(getGamesComplete)
			.catch(getGamesFailed);

		function getGamesComplete(response) {
			return response.data;
		}

		function getGamesFailed(response) {
			console.error("Failed to get games");
		}
	}

	function getGame(gameId, console) {
		if (console === null) {
			return $http.get($apiUrl + "getGame.php?gameId=" + gameId)
				.then(getGameSuccess)
				.catch(getGameFailed);
		} else {
			return $http.get($apiUrl + "getGame.php?gameId=" + gameId + "&console=" + console)
				.then(getGameSuccess)
				.catch(getGameFailed);

		}

		function getGameSuccess(response) {
			return response.data;
		}

		function getGameFailed(response) {
			console.error("Failed to get store")

		}
	}

}
