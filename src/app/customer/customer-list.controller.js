CustomerListController.$inject = ['$state', 'personService']

export default function CustomerListController($state, personService) {
  var self = this;
  self.customers = {};
  self.customers.data = [];
  self.query = {
    filter: '',
    order: 'name',
    limit: 50,
    page: 1
  };
  self.viewCustomer = viewCustomer;
  self.search = search;
  self.searchQuery = '';

  init();

  function init() {
    getCustomers();
  }

  function getCustomers() {
    personService.getCustomers().then(function(customers) {
      if (customers !== undefined) {
        self.customers.data = customers;
        self.customers.count = customers.length;
      }
    })
  }

  function viewCustomer(customer) {
    $state.go('customer', {
      customerId: customer.mId
    });
  }

  function search() {
    personService.getCustomersSearchName(self.searchQuery).then(function(customers) {
      if (customers !== undefined) {
        self.customers.data = customers;
        self.customers.count = customers.length;
      }
    });
  }
}
