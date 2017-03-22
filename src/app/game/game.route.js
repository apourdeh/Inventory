gameRoute.$inject = ['$stateProvider'];

export default function gameRoute($stateProvider) {
  $stateProvider
    .state('gameList', {
      url: '/game/list',
      template: require('./game-list.html'),
      controller: 'GameListController',
      controllerAs: 'ListCtrl'
    })
    .state('game', {
      url: '/game/{gameId}',
      template: require('./game.html'),
      controller: 'GameController',
      controllerAs: 'GameCtrl'
    });

}
