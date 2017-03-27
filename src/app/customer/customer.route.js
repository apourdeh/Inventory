customerRoute.$inject = ['$stateProvider'];

export default function customerRoute($stateProvider) {
  $stateProvider
    .state('customerList', {
      url: '/customer/list',
      template: require('./customer-list.html'),
      controller: 'CustomerListController',
      controllerAs: 'ListCtrl'
    })
    .state('customer', {
      url: '/customer/{customerId}',
      template: require('./customer.html'),
      controller: 'CustomerController',
      controllerAs: 'CustomerCtrl'
    });

}
