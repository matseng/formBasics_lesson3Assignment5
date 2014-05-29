angular.module('MyApp', []);

angular.module('MyApp')
  .controller('FormController', ['$scope', function($scope) {
    $scope.submit = function() {
      console.log("hello world", $scope.data);
      $scope.myForm.submitted = true;
      if($scope.myForm.$valid) {
        console.log('The form is valid');
      } else {
        console.log('The form is invalid');
      }
    };
  }]);
