copyService.$inject = ['$http', '$apiUrl'];

export default function copyService($http, $apiUrl) {

  return {
    getCopiesFromStore: getCopiesFromStore,
    purchase: purchase
  };

  function getCopiesFromStore(storeId) {
    return $http.get($apiUrl + "copies/" + storeId)
      .then(getCopiesFromStoreComplete)
      .catch(getCopiesFromStoreFailed);

    function getCopiesFromStoreComplete(response) {
      return response.data;
    }

    function getCopiesFromStoreFailed(response) {
      console.error("Failed to get copies from store " + storeId);
    }
  }

  function purchase(copy) {
    return $http.put($apiUrl + "copy/purchase" + copy.id)
      .then(purchaseComplete)
      .catch(purchaseFailed);

    function purchaseComplete(response) {
      return response.data;
    }

    function purchaseFailed(response) {
      console.error("Failed to purchase copy");
    }
  }
}
