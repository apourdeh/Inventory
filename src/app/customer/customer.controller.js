CustomerController.$inject = ['$stateParams', 'personService', 'purchaseService']

export default function CustomerController($stateParams, personService, purchaseService) {
  var self = this;
  self.customerId = $stateParams.customerId;
  self.customer = {};
  self.purchases = {};
  self.purchases.data = [];

  init();

  function init() {
    getCustomer();
    getCustomerPurchases();
  }

  function getCustomer() {
    personService.getCustomer(self.customerId).then(function(customer) {
      self.customer = customer;
    });
  }

  function getCustomerPurchases() {
    purchaseService.getPurchasesForCustomer(self.customerId).then(function(purchases) {
      self.purchases.data = purchases;
      self.purchases.count = purchases.length;
    })
  }
}
