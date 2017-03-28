gameService.$inject = ['$http', '$apiUrl'];

export default function gameService($http, $apiUrl) {

  return {
    getGames: getGames
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
}
