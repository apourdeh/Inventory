GameListController.$inject = ['$state', 'gameService'];


export default function GameListController($state, gameService) {
	var self = this;
	self.games = {};
	self.games.data = [];
	self.viewGame = viewGame;
	
	init();

	function init() {
		getGames();
	}

	function getGames() {
		gameService.getGames().then(function (games) {
			if (games !== undefined) {
				self.games.data = games;
				self.games.count = games.length;
			}
		})
	}
	
	function viewGame(game){
		$state.go('game', {
        gameId : game.gameId
    });
	}


	
}
