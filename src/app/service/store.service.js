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
    return $http.get($apiUrl + "getStore.php?storeId=" + storeId)
      .then(getStoreSuccess)
      .catch(getStoreFailed);

    function getStoreSuccess(response) {
      // idk how to make the php not return it in an array, so we just extact the elemnt from the array
      return response.data[0];
    }

    function getStoreFailed(response) {
      console.error("Failed to get store")

    }
  }
}
