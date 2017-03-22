StoreListController.$inject = ['$state', 'storeService'];

export default function StoreListController($state, storeService) {
  var self = this;
  self.stores = {};
  self.stores.data = [{
      id: 1,
      address: '123 S. Whatever'
    },
    {
      id: 2,
      address: '456 N. Hello'
    }
  ];
  self.viewStore = viewStore;
  self.getStores = getStores;

  init();

  function init() {
    getStores();
  }


  function viewStore(store) {
    $state.go('store', {
      storeId: store.id
    });
  }

  function getStores() {
    storeService.getStores().then(function(stores) {
      if (stores !== undefined) {
        self.stores = stores;
      }
    })
  }


  console.log("store list controller initialized");
}
