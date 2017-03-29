import storeService from './store.service';
import copyService from './copy.service';
import personService from './person.service';
import gameService from './game.service';
import purchaseService from './purchase.service';

const MODULE_NAME = 'app.service';

angular.module(MODULE_NAME, [])
  .service('storeService', storeService)
  .service('copyService', copyService)
  .service('personService', personService)
  .service('gameService', gameService)
  .service('purchaseService', purchaseService)
  .constant('$apiUrl', API_URL);

export default MODULE_NAME;
