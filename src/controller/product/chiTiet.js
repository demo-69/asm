window.chitietSP = function ($scope, $rootScope, $routeParams, $http) {
  $rootScope.listPages = [];
  $rootScope.tongSp = [];
  $rootScope.pagin = [];
  $rootScope.pageHienTai = 1;

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
  console.log(loaisp);
  if ($scope.tenLoai == undefined) {
    $scope.tenLoai = "";
  } else {
    $scope.tenLoai = loaisp;
  }

  console.log($rootScope.listSanPham);
  $scope.listTimKiemLoai = $rootScope.listSanPham.filter((sp) => {
    return sp.loai === loaisp;
  });
  console.log($scope.listTimKiemLoai);
  $scope.updateTimKiemLoai = function (loaisp) {
    $rootScope.listSanPham = $scope.listTimKiemLoai;
  };

  //detail
  const id = $routeParams.id;
  const detail = $rootScope.listSanPham.filter((sp) => {
    return sp.id == id;
  })[0];
  $scope.detail = detail;

  const name = $routeParams.name;
  // console.log(name);
  $scope.listTimKiem = $rootScope.listSanPham.filter((sp) => {
    return sp.hang == name;
  });
  $scope.tenHang = name;
  // console.log($scope.listTimKiem);

  $http.get("http://localhost:3000/sanPham").then(function (response) {
    $rootScope.listSanPham = response.data;
    for (var i = 1; i < Math.ceil(response.data.length / 9); i++) {
      $rootScope.pagin.push(i);
    }
  });
  $scope.getPhanTrang = function (page, limit) {
    $http.get(sanPham(page, limit)).then(function (response) {
      $rootScope.listPage = response.data;
      $rootScope.pageHienTai = page;
    });
  };

  $http.get(sanPham(1, 9)).then(function (response) {
    $rootScope.listPage = response.data;
    $rootScope.pageHienTai = 1;
  });
};
