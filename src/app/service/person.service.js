personService.$inject = ['$http', '$apiUrl'];

export default function personService($http, $apiUrl) {

  return {
    getCustomers: getCustomers
  };

  function getCustomers() {
    return $http.get($apiUrl + "getCustomers.php")
      .then(getCustomersComplete)
      .catch(getCustomersFailed);

    function getCustomersComplete(response) {
      return response.data;
    }

    function getCustomersFailed(response) {
      console.error("Failed to get customers");
    }
  }
}
