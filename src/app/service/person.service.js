personService.$inject = ['$http', '$apiUrl'];

export default function personService($http, $apiUrl) {

  return {
    getCustomers: getCustomers,
    getCustomer: getCustomer,
    getCustomersSearchName: getCustomersSearchName
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

  function getCustomer(customerId) {
    return $http.get($apiUrl + "GetCustomer.php?customerId=" + customerId)
      .then(getCustomerComplete)
      .catch(getCustomerFailed);

    function getCustomerComplete(response) {
      return response.data[0];
    }

    function getCustomerFailed(response) {
      console.error("Failed to get customer " + customerId);
    }
  }

  function getCustomersSearchName(name) {
    return $http.get($apiUrl + "GetCustomersSearchName.php?customerName=" + name)
      .then(getCustomersSearchNameComplete)
      .then(getCustomersSearchNameFailed);

    function getCustomersSearchNameComplete(response) {
      return response.data;
    }

    function getCustomersSearchNameFailed(response) {
      console.error("Failed to get customer " + name);
    }
  }
}
