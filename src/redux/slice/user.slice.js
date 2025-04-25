import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nguoiDung: {
    hoTen: "Khải",
    tuoi: 25,
  },
};

const userSlice = createSlice({
  // đặt tên cho reducer
  name: "user",
  // thực hiện lưu trữ dữ liệu mặc định trên store
  initialState,
  // tạo các phương thức dispatch để thay đổi dữ liệu
  reducers: {},
});

export const {} = userSlice.actions;

export default userSlice.reducer;

// rxslice
