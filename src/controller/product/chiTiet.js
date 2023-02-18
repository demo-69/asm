window.chitietSP = function ($scope, $rootScope, $routeParams, $http) {
  // $scope.listSanPham = [];
  // //   const list = $scope.listSanPham;

  // $http.get(sanPhamAPI).then(function (response) {
  //   console.log(response.data);
  //   $scope.listSanPham = response.data;
  //   // console.log(list);
  // });
  // console.log($rootScope.listSanPham);

  $scope.listTimKiem = [];
  $scope.listTimKiemLoai = [];

  // loại sản phẩm
  const loaisp = $routeParams.loaisp;
  $scope.tenLoai = loaisp;
  console.log(loaisp);
  $scope.listTimKiemLoai = $rootScope.listSanPham.filter((sp) => {
    return sp.loai === loaisp;
  });
  console.log($scope.listTimKiemLoai);

  //detail
  const id = $routeParams.id;
  const detail = $rootScope.listSanPham.filter((sp) => {
    return sp.id == id;
  })[0];
  $scope.detail = detail;

  const name = $routeParams.name;
  console.log(name);
  $scope.listTimKiem = $rootScope.listSanPham.filter((sp) => {
    return sp.hang == name;
  });
  $scope.tenHang = name;
  console.log($scope.listTimKiem);
};
