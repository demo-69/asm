window.loginController = function ($scope, $http, $rootScope) {
  $scope.user = "";
  $scope.pass = "";
  $scope.pass1 = "";
  $scope.pass2 = "";
  $scope.listLogin = [];
  $scope.eror = {
    hashError: false,
  };
  $scope.dangNhap = function (event) {
    event.preventDefault();
    if ($scope.user === "") {
      $scope.eror.hashError = true;
      $scope.eror.user = "Không được để trống";
    }
    if ($scope.pass === "") {
      $scope.eror.hashError = true;
      $scope.eror.pass = "Không được để trống";
    }
    if ($scope.eror.hashError) return;
    $http
      .get(
        "http://localhost:3000/user?username=" +
          $scope.user +
          "&password=" +
          $scope.pass
      )
      .then(function (response) {
        if (response.data.lenght == 0) {
          alert("Đăng nhập không thành công");
        } else {
          console.log(response.data);
          alert("Đăng nhập thành công");

          localStorage.setItem("loginUser", JSON.stringify(response.data[0]));
          $rootScope.user1 = JSON.parse(localStorage.getItem("loginUser"));
        }
        console.log(response);
      });
  };
  $http.get(loginAPI).then(function (response) {
    $scope.listLogin = response.data;
  });

  $scope.doiMatKhau = function (event) {
    event.preventDefault();
    $rootScope.user1 = JSON.parse(localStorage.getItem("loginUser"));
    console.log($rootScope.user1);

    if ($scope.pass != $rootScope.user1.password) {
      $scope.eror.hashError = true;
      $scope.eror.pass = "Mật khẩu cũ không đúng!";
    } else if ($scope.pass1 != $scope.pass2) {
      $scope.eror.hashError = true;
      $scope.eror.pass1 = "Mật khẩu không khớp nhau!";
    }
    console.log($scope.listLogin);
    if ($scope.eror.hashError) return;
    let api = loginAPI + "/" + $rootScope.user1.id;
    $http.patch(api, { password: $scope.pass1 }).then(function (response) {
      $scope.listLogin[$rootScope.user1.id] = response.data;
      alert("Tahnfh công");
    });
  };

  $scope.formDangKy = {
    username: "",
    password: "",
    vaiTro: "Khách hàng",
    ngaySinh: "",
    gioiTinh: "",
  };
  $scope.listUser = [];
  $scope.dangKy = function (event) {
    event.preventDefault();
    $scope.eror = {
      hashError: false,
    };
    if ($scope.formDangKy.password === "") {
      $scope.eror.hashError = true;
      $scope.eror.password = "Không được để trống";
    }
    if ($scope.formDangKy.username === "") {
      $scope.eror.hashError = true;
      $scope.eror.username = "Không được để trống";
    }
    if ($scope.formDangKy.ngaySinh === "") {
      $scope.eror.hashError = true;
      $scope.eror.ngaySinh = "Không được để trống";
    }
    if ($scope.formDangKy.gioiTinh == "") {
      $scope.eror.hashError = true;
      $scope.eror.gioiTinh = "Không được để trống";
    }
    if ($scope.eror.hashError) return;
    console.log($scope.formDangKy.username);
    console.log($scope.formDangKy.password);
    console.log($scope.formDangKy.ngaySinh);
    console.log($scope.formDangKy.gioiTinh);
    $http.post(userAPI, $scope.formDangKy).then(function (response) {
      $scope.listUser.push(response.data);
      alert("thành công");
    });
  };
};
