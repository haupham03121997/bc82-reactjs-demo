import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: "AMOLED, 6.2, Full HD+",
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./src/assets/phones/vsphone.jpg",
    },
    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "/src/assets/phones/meizuphone.jpg",
    },
    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraTruoc: "7 MP",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "/src/assets/phones/applephone.jpg",
    },
  ],
  gioHang: [],
  checkExist: {
    
  },
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    themGioHang: (state, action) => {
      // khi bấm cần gửi thông tin của sản phẩm lên
      // gửi toàn bộ thông tin của sản phẩm lên
      // chỉ gửi mỗi id sản phẩm ==> tìm xem sản phẩm cần bỏ giỏ hàng bên trong products ==> find ==> thêm vào || + 1
      // const spGioHang = { ...action.payload, soLuong: 1 };
      // const checkExist = state.gioHang.findIndex(
      //   (item) => item.maSP === spGioHang.maSP
      // );
      // // có sản phẩm || undifined
      // if (checkExist != -1) {
      //   state.gioHang[checkExist].soLuong += 1;
      //   // làm sao đưa vào giỏ hàng của redux ?
      // } else {
      //   let gioHang = [...state.gioHang, spGioHang];
      //   state.gioHang = gioHang;
      // }

      // lấy maSP kiểm tra xem đã có sản phẩm hay chưa
      let check = state.checkExist[action.payload.maSP]; // true ==> đã có thuộc tính mang giá trị là maSP || false ==> undifined
      if (check) {
        // dùng hàm find để tìm kiếm sp
        state.gioHang[check - 1].soLuong += 1;
      } else {
        // chưa có thêm vào giỏ hàng
        const spGioHang = { ...action.payload, soLuong: 1 };
        state.gioHang = [...state.gioHang, spGioHang];
        state.checkExist[action.payload.maSP] = state.gioHang.length;
      }
    },
    xoaGioHang: (state, action) => {
      // action.payload gửi lên maSP
      let check = state.checkExist[action.payload];
      //
      console.log(check);
      if (check) {
        state.gioHang.splice(check - 1, 1);

        delete state.checkExist[action.payload];
      }
    },
  },
});

export const { themGioHang, xoaGioHang } = productSlice.actions;

export default productSlice.reducer;

// loại bỏ phần tử trùng lặp khỏi mảng
// [1,3,5,7,2,3,5,7] ==> loại bỏ hết các phần tử trùng lặp
// duyệt vòng lặp ==> vòng lặp con ==> on2
// 1
