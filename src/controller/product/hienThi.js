window.sanPhamController = function ($scope, $routeParams, $http, $rootScope) {
  $rootScope.listSanPham = [];
  $scope.listPages = [];
  $rootScope.tongSp = [];
  $rootScope.pagin = [];
  $rootScope.listLoaiSP = [];

  $scope.pageHienTai = 1;
  $scope.eror = {
    hasErrors: false,
  };
  $scope.fromProduct = {
    ten: "",
    giaSale: "",
    mota: "",
    manHinh: "",
    hang: "",
    loai: "",
    anh: "",
  };

  $scope.vitriUpdate = -1;
  $scope.vitriUpdateTheLoai = -1;

  $http.get(sanPhamAPI).then(function (response) {
    $rootScope.listSanPham = response.data;
    for (var i = 1; i < Math.ceil(response.data.length / 8); i++) {
      $rootScope.pagin.push(i);
    }
  });
  $scope.getPhanTrang = function (page, limit) {
    $http.get(sanPham(page, limit)).then(function (response) {
      $scope.listPage = response.data;
      $scope.pageHienTai = page;
    });
  };

  $http.get(sanPham(1, 8)).then(function (response) {
    $scope.listPage = response.data;
    $scope.pageHienTai = 1;
  });

  $scope.addProduct = function (event) {
    event.preventDefault();
    $scope.eror = {
      hasErrors: false,
    };
    if ($scope.fromProduct.ten === "") {
      $scope.eror.hasErrors = true;
      $scope.eror.ten = "Không được để trống";
    }
    if ($scope.fromProduct.giaSale === "") {
      $scope.eror.hasErrors = true;
      $scope.eror.giaSale = "Không được để trống";
    }
    if ($scope.fromProduct.mota === "") {
      $scope.eror.hasErrors = true;
      $scope.eror.mota = "Không được để trống";
    }
    if ($scope.fromProduct.manHinh === "") {
      $scope.eror.hasErrors = true;
      $scope.eror.manHinh = "Không được để trống";
    }
    if ($scope.fromProduct.hang === "") {
      $scope.eror.hasErrors = true;
      $scope.eror.hang = "Không được để trống";
    }
    if ($scope.fromProduct.loai === "") {
      $scope.eror.hasErrors = true;
      $scope.eror.loai = "Không được để trống";
    }
    if ($scope.fromProduct.anh === "") {
      $scope.eror.hasErrors = true;
      $scope.eror.anh = "Không được để trống";
    }
    if ($scope.eror.hasErrors) return;
    $http.post(sanPhamAPI, $scope.fromProduct).then(function (response) {
      $scope.listSanPham.push(response.data);
    });
  };
  $scope.detailSanPham = function (event, index) {
    event.preventDefault();
    let sp = $scope.listSanPham[index];
    $scope.fromProduct.ten = sp.ten;
    $scope.fromProduct.giaSale = sp.giaSale;
    $scope.fromProduct.mota = sp.mota;
    $scope.fromProduct.manHinh = sp.manHinh;
    $scope.fromProduct.hang = sp.hang;
    $scope.fromProduct.loai = sp.loai;
    $scope.fromProduct.anh = sp.anh;
    $scope.vitriUpdate = index;
  };
  $scope.updateProduct = function (event) {
    event.preventDefault();
    $scope.eror = {
      hasErrors: false,
    };
    if ($scope.fromProduct.ten === "") {
      $scope.eror.hasErrors = true;
      $scope.hasErrors.ten = "Không được để trống";
    }
    if ($scope.fromProduct.giaSale === "") {
      $scope.eror.hasErrors = true;
      $scope.eror.giaSale = "Không được để trống";
    }
    if ($scope.fromProduct.mota === "") {
      $scope.eror.hasErrors = true;
      $scope.eror.mota = "Không được để trống";
    }
    if ($scope.fromProduct.manHinh === "") {
      $scope.eror.hasErrors = true;
      $scope.eror.manHinh = "Không được để trống";
    }
    if ($scope.fromProduct.hang === "") {
      $scope.eror.hasErrors = true;
      $scope.eror.hang = "Không được để trống";
    }
    if ($scope.fromProduct.loai === "") {
      $scope.eror.hasErrors = true;
      $scope.eror.loai = "Không được để trống";
    }
    if ($scope.fromProduct.anh === "") {
      $scope.eror.hasErrors = true;
      $scope.eror.anh = "Không được để trống";
    }
    if ($scope.eror.hasErrors) return;
    if ($scope.vitriUpdate == -1) {
      alert("Chọn 1 sản phẩm để update!");
    }
    let sp = $scope.listSanPham[$scope.vitriUpdate];
    let api = sanPhamAPI + "/" + sp.id;
    $http.put(api, $scope.fromProduct).then(function (response) {
      $scope.listSanPham[$scope.vitriUpdate] = response.data;
    });
  };
  $scope.removeSanPham = function (event, index) {
    event.preventDefault();
    var sp = $scope.listSanPham[index];
    var api = sanPhamAPI + "/" + sp.id;
    $http.delete(api).then(function () {
      $scope.listSanPham.splice(index, 1);
      alert("Thành công");
    });
  };
  ///Thể loại
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
