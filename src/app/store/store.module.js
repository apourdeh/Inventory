import storeRoute from './store.route';

import StoreListController from './store-list.controller';
import StoreController from './store.controller';

const MODULE_NAME = 'app.store';

angular.module(MODULE_NAME, [])
  .controller('StoreListController', StoreListController)
  .controller('StoreController', StoreController)
  .config(storeRoute);

export default MODULE_NAME;
