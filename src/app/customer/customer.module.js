import customerRoute from './customer.route';

import CustomerListController from './customer-list.controller';
import CustomerController from './customer.controller';

const MODULE_NAME = 'app.customer';

angular.module(MODULE_NAME, [])
  .controller('CustomerListController', CustomerListController)
  .controller('CustomerController', CustomerController)
  .config(customerRoute);

export default MODULE_NAME;
