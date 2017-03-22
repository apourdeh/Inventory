storeRoute.$inject = ['$stateProvider'];

export default function storeRoute($stateProvider) {
  $stateProvider
    .state('storeList', {
      url: '/store/list',
      template: require('./store-list.html'),
      controller: 'StoreListController',
      controllerAs: 'ListCtrl'
    })
    .state('store', {
      url: '/store/{storeId}',
      template: require('./store.html'),
      controller: 'StoreController',
      controllerAs: 'StoreCtrl'
    });

}
