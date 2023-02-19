const url = "http://localhost:3000";
const userAPI = url + "/user";
const sanPhamAPI = url + "/sanPham";
// const sanPhamAPI1 = url + "/sanPham";
const loginAPI = url + "/user";
// ?_sort=id&_order=desc
const sanPham = function (page, limit, loai) {
  return url + "/sanPham?_page=" + page + "&_limit=" + limit;
};
const sanPhamMoi = function (page, limit) {
  return (
    url + "/sanPham?_sort=id&_order=desc&_page=" + page + "&_limit=" + limit
  );
};
const loaiAPI = url + "/loai";
