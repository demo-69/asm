window.loaiSPController = function ($scope, $rootScope, $http) {
  $scope.listLoaiSP = [];
  $scope.eror = {
    hasErrors: false,
  };
  $http.get(loaiAPI).then(function (response) {
    $rootScope.listLoaiSP = response.data;
  });
  $scope.addTheLoai = function (event) {
    $scope.eror = {
      hasErrors: false,
    };
    if ($scope.theLoai1 === "") {
      $scope.eror.hasErrors = true;
      $scope.eror.theLoai1 = "Không được để trống";
    }
    if ($scope.eror.hasErrors) return;
    $http.post(loaiAPI, $scope.theLoai).then(function (response) {
      $rootScope.listLoaiSP.push(response.data);
    });
  };
  $scope.detail = function (event) {
    event.preventDefault();
    let tl = $rootScope.listLoaiSP[index];
    $scope.theLoai1 = tl.theLoai;
    $scope.vitriUpdateTheLoai = index;
  };
  $scope.remove = function (event, index) {
    event.preventDefault();
    let tl = $rootScope.listLoaiSP[index];
    $http.delete(loaiAPI).then(function () {
      $rootScope.listLoaiSP.splice(index, 1);
      alert("Xóa thành công");
    });
  };
};
