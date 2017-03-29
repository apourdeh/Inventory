GameController.$inject = ['$stateParams', 'gameService'];

export default function GameController($stateParams, gameService) {
	var self = this;
	self.gameId = $stateParams.gameId;
	self.copies = {};
  	self.copies.data = [];
	self.query = {
    filter: '',
    order: 'name',
    limit: 50,
    page: 1
  	};
	
	
	init();
	
	function init(){
		getInventory();
	}
	
	function getInventory(){
		gameService.getGame(self.gameId).then(function(game){
			if(game!==undefined){
				self.copies.data = game;
			}
		})
	}
	
	
	
}
