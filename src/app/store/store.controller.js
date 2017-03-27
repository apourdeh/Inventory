StoreController.$inject = ['$stateParams', 'storeService', 'copyService', 'personService', '$mdDialog', '$scope'];

export default function StoreController($stateParams, storeService, copyService, personService, $mdDialog, $scope) {
  var self = this;
  self.storeId = $stateParams.storeId;
  self.store = {};
  self.copies = {};
  self.copies.data = [];
  self.customers = [];
  self.getCopiesFromStore = getCopiesFromStore;
  self.purchase = purchase;
  self.query = {
    filter: '',
    order: 'name',
    limit: 50,
    page: 1
  };
  self.rating = '';

  init();

  function init() {
    getStore();
    getCopiesFromStore();
    getCustomers();
  }

  function getStore() {
    storeService.getStore(self.storeId).then(function(store) {
      if (store !== undefined) {
        self.store = store;
      }
    })
  }

  function getCustomers() {
    personService.getCustomers().then(function(customers) {
      if (customers !== undefined) {
        self.customers = customers;
      }
    })
  }

  function getCopiesFromStore() {
    copyService.getCopiesFromStore(self.storeId, self.rating).then(function(copies) {
      if (copies !== undefined) {
        self.copies.data = copies;
        self.copies.count = copies.length;
      }
    })
  }

  function purchase(copy) {
    $scope.customers = self.customers;
    $scope.copy = copy;
    $mdDialog.show({
        controller: 'DialogController',
        template: require('./purchase-copy-dialog.html'),
        scope: $scope,
        preserveScope: true,
        clickOutsideToClose: true,
      })
      .then(function() {
        var formData = new FormData();
        formData.append('customerId', $scope.customerId);
        formData.append('copyId', $scope.copy.id);
        copyService.purchase(formData);
      });
  }
}
