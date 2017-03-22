StoreListController.$inject = ['$state', 'storeService'];

export default function StoreListController($state, storeService) {
  var self = this;
  self.stores = {};
  self.stores.data = [];
  self.viewStore = viewStore;
  self.getStores = getStores;

  init();

  function init() {
    getStores();
  }


  function viewStore(store) {
    $state.go('store', {
      storeId: store.storeNumber
    });
  }

  function getStores() {
    storeService.getStores().then(function(stores) {
      if (stores !== undefined) {
        self.stores.data = stores;
      }
    })
  }
}
