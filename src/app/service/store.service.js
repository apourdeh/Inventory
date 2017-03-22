storeService.$inject = ['$http', '$apiUrl'];

export default function storeService($http, $apiUrl) {

  return {
    getStores: getStores,
    getStore: getStore
  };

  function getStores() {
    return $http.get($apiUrl + "getStores.php")
      .then(getStoresComplete)
      .catch(getStoresFailed);

    function getStoresComplete(response) {
      return response.data;
    }

    function getStoresFailed(response) {
      console.error("Failed to get stores")
    }
  }

  function getStore(storeId) {
    return $http.get($apiUrl + "store/" + storeId)
      .then(getStoreSuccess)
      .catch(getStoreFailed);

    function getStoreSuccess(response) {
      return response.data;
    }

    function getStoreFailed(response) {
      console.error("Failed to get store")

    }
  }
}
