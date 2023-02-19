window.sanPhamController = function ($scope, $routeParams, $http, $rootScope) {
  $rootScope.listSanPham = [];
  $rootScope.listSanPhamMoiNhat = [];
  $rootScope.listPages = [];
  $rootScope.tongSp = [];
  $rootScope.pagin = [];
  $rootScope.listPage1 = [];
  $rootScope.listLoaiSP = [];
  $scope.man1 = 1;
  $rootScope.pageHienTai = 1;
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
  // console.log($rootScope.user1);

  $scope.vitriUpdate = -1;
  $scope.vitriUpdateTheLoai = "";

  $http.get(sanPhamAPI).then(function (response) {
    $rootScope.listSanPham = response.data;
    console.log($rootScope.listSanPham);
    for (var i = 1; i < Math.ceil(response.data.length / 4); i++) {
      $rootScope.pagin.push(i);
    }
  });

  $scope.getPhanTrang = function (page, limit) {
    $http.get(sanPham(page, limit)).then(function (response) {
      $rootScope.listPage = response.data;
      $rootScope.pageHienTai = page;
    });
  };

  $http.get(sanPham(1, 4)).then(function (response) {
    $rootScope.listPage = response.data;
    $rootScope.pageHienTai = 1;
  });
  $http.get(sanPhamMoi(1, 4)).then(function (response) {
    $rootScope.listPage1 = response.data;
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
    // if ($scope.fromProduct.anh === "") {
    //   $scope.eror.hasErrors = true;
    //   $scope.eror.anh = "Không được để trống";
    // }
    if ($scope.eror.hasErrors) return;

    const fileInput = document.getElementById("files");
    for (const file of fileInput.files) {
      console.log(file.name);
      $scope.fromProduct.anh = file.name;
      console.log($scope.fromProduct.anh);
    }
    console.log("oke");
    $http.post(sanPhamAPI, $scope.fromProduct).then(function (response) {
      console.log("oke");
      console.log($scope.fromProduct);
      $scope.listSanPham.push(response.data);
      console.log("oke");
      alert("Add thành công");
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
  $scope.theLoai1 = "";
  $scope.addTheLoai = function (event) {
    $scope.eror = {
      hasErrors: false,
    };
    console.log("okee");
    console.log($scope.theLoai1);
    if ($scope.theLoai1 === "") {
      $scope.eror.hasErrors = true;
      $scope.eror.theLoai1 = "Không được để trống";
    }
    if ($scope.eror.hasErrors) return;
    console.log("okee");
    console.log($scope.theLoai1);
    $http.post(loaiAPI, { theLoai: $scope.theLoai1 }).then(function (response) {
      $rootScope.listLoaiSP.push(response.data);
    });
  };
  $scope.detail = function (event, index) {
    event.preventDefault();
    let tl = $rootScope.listLoaiSP[index];
    $scope.theLoai1 = tl.theLoai;
    $scope.vitriUpdateTheLoai = index;
  };
  $scope.updateTheLoai = function (event) {
    event.preventDefault();

    let tl = $scope.listLoaiSP[$scope.vitriUpdateTheLoai];

    let api = loaiAPI + "/" + tl.id;
    $http.put(api, { theLoai: $scope.theLoai1 }).then(function (response) {
      $scope.listLoaiSP[$scope.vitriUpdateTheLoai] = response.data;
    });
  };
  $scope.remove = function (event, index) {
    event.preventDefault();
    let tl = $rootScope.listLoaiSP[index];
    console.log(tl);
    let api = loaiAPI + "/" + tl.id;
    $http.delete(api).then(function () {
      $rootScope.listLoaiSP.splice(index, 1);
      // alert("Xóa thành công");
    });
  };

  $scope.updateTrang = function (so) {
    $scope.man1 = so;
  };
};
