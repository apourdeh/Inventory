import gameRoute from './game.route';

import GameListController from './game-list.controller';
import GameController from './game.controller';

const MODULE_NAME = 'app.game';

angular.module(MODULE_NAME, [])
  .controller('GameListController', GameListController)
  .controller('GameController', GameController)
  .config(gameRoute);

export default MODULE_NAME;
