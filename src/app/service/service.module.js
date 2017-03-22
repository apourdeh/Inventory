import storeService from './store.service';
import copyService from './copy.service';

const MODULE_NAME = 'app.service';

angular.module(MODULE_NAME, [])
  .service('storeService', storeService)
  .service('copyService', copyService)
  .constant('$apiUrl', API_URL);

export default MODULE_NAME;
