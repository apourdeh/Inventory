GameController.$inject = ['$stateParams'];

export default function GameController($stateParams) {
	var self = this;
	self.gameId = $stateParams.gameId;
}
