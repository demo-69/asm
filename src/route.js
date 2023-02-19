var app1 = angular.module("myApp", ["ngRoute"]);
app1.config(function ($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/trangChu", {
      templateUrl: "./page/trangchu.html",
      controller: sanPhamController,
    })
    .when("/iphone/:name", {
      templateUrl: "./page/iphone.html",
      controller: chitietSP,
    })
    .when("/samsung/:name", {
      // templateUrl: "./page/samSung.html",
      templateUrl: "./page/iphone.html",
      controller: chitietSP,
    })
    .when("/xiaomi/:name", {
      // templateUrl: "./page/xiaomi.html",
      templateUrl: "./page/iphone.html",
      controller: chitietSP,
    })
    .when("/gioiThieu", {
      templateUrl: "./page/gioiThieu.html",
    })
    .when("/suKien", {
      templateUrl: "./page/suKien.html",
    })
    .when("/dangNhap", {
      templateUrl: "./page/dangNhap.html",
      controller: loginController,
    })
    .when("/dangKy", {
      templateUrl: "./page/dangKy.html",
      controller: loginController,
    })
    .when("/doiMK", {
      templateUrl: "./page/doiMk.html",
      controller: loginController,
    })
    .when("/sanPham", {
      templateUrl: "./page/sanPham.html",
      controller: chitietSP,
    })
    .when("/detail/:id", {
      templateUrl: "./page/detail.html",
      controller: chitietSP,
    })
    .when("/dtGaming/:loaisp", {
      templateUrl: "./page/loaiSp.html",
      controller: chitietSP,
    })
    .when("/dt5G/:loaisp", {
      templateUrl: "./page/loaiSp.html",
      controller: chitietSP,
    })
    .when("/dtDungLL/:loaisp", {
      templateUrl: "./page/loaiSp.html",
      controller: chitietSP,
    })
    .when("/dtPinTrau/:loaisp", {
      templateUrl: "./page/loaiSp.html",
      controller: chitietSP,
    })

    .when("/huongDanTT", {
      templateUrl: "./page/hdThanhToan.html",
    })
    .when("/quanLy", {
      templateUrl: "./page/quanLy.html",
      controller: sanPhamController,
    })
    .when("/TinTuc", {
      templateUrl: "./page/tinTuc.html",
    })
    .when("/lienHe", {
      templateUrl: "./page/lienHe.html",
    })
    .when("/gioHang", {
      templateUrl: "./page/gioHang.html",
    })
    .otherwise({
      redirectTo: "/trangChu",
    });
});
