CustomerController.$inject = ['$stateParams']

export default function CustomerController($stateParams) {
  var self = this;
  self.customerId = $stateParams.customerId;
}
