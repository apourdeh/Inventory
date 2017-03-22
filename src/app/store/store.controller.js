StoreController.$inject = ['$stateParams', 'storeService', 'copyService', '$mdDialog'];

export default function StoreController($stateParams, storeService, copyService, $mdDialog) {
  var self = this;
  self.storeId = $stateParams.storeId;
  self.store = {
    address: 'test address'
  };
  self.copies = {};
  self.copies.data = [{
    id: 1,
    gameName: "FIFA 2017",
    price: '20.99',
    condition: 'USED'
  }, {
    id: 2,
    gameName: "Mario Kart",
    price: '15.99',
    condition: 'USED'
  }];
  self.getCopiesFromStore = getCopiesFromStore;
  self.purchase = purchase;

  init();

  function init() {
    getStore();
    getCopiesFromStore();
  }

  function getStore() {
    storeService.getStore(self.storeId).then(function(store) {
      if (store !== undefined) {
        self.store = store;
      }
    })
  }

  function getCopiesFromStore() {
    copyService.getCopiesFromStore(self.storeId).then(function(copies) {
      if (copies !== undefined) {
        self.copies.data = copies;
      }
    })
  }

  function purchase(copy) {
    copyService.purchase(copy).then(function() {
      self.getCopiesFromStore();
    })
  }
}
