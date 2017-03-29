purchaseService.$inject = ['$http', '$apiUrl'];

export default function purchaseService($http, $apiUrl) {

  return {
    getPurchasesForCustomer: getPurchasesForCustomer
  };

  function getPurchasesForCustomer(customerId) {
    return $http.get($apiUrl + "getPurchasesForCustomer.php?customerId=" + customerId)
      .then(getPurchasesForCustomerComplete)
      .catch(getPurchasesForCustomerFailed);

    function getPurchasesForCustomerComplete(response) {
      return response.data;
    }

    function getPurchasesForCustomerFailed(response) {
      console.error("Failed to get purchases for customer " + customerId);
    }
  }
}
