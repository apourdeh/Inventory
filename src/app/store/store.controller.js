StoreController.$inject = ['$stateParams'];

export default function StoreController($stateParams) {
  var self = this;
  self.storeId = $stateParams.storeId;

}
