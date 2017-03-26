DialogController.$inject = ['$scope', '$mdDialog'];

export default function DialogController($scope, $mdDialog) {
  $scope.accept = function() {
    $mdDialog.hide(function() {});
  };

  $scope.close = function() {
    $mdDialog.cancel();
  };
}
