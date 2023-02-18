const url = "http://localhost:3000";
const userAPI = url + "/user";
const sanPhamAPI = url + "/sanPham";
const sanPhamAPI1 = url + "/sanPham?_sort=id&_order=desc";
const loginAPI = url + "/user";
// ?_sort=id&_order=desc
const sanPham = function (page, limit) {
  return (
    url + "/sanPham?_sort=id&_order=desc&_page=" + page + "&_limit=" + limit
  );
};
const loaiAPI = url + "/loai";
