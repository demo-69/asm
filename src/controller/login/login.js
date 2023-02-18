window.loginController = function ($scope, $http) {
  $scope.listLogin = [];
  $scope.fromLogin = {
    user: "",
    pass: "",
  };
  $http.get(loginAPI).then(function (response) {
    $scope.listLogin = response.data;
  });

  $scope.dangNhap = function (event) {
    event.preventDefault();
    console.log($scope.user);
    const lg = $scope.listLogin.filter((sv) => {
      return 0;
    });
  };
};
