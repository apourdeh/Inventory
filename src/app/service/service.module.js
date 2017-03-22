import storeService from "./store.service";

const MODULE_NAME = 'app.service';

angular.module(MODULE_NAME, [])
  .service('storeService', storeService)
  .constant('$apiUrl', API_URL);

export default MODULE_NAME;
