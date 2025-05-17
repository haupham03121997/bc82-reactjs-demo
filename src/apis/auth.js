import fetcher from './fetcher';

export const loginApi = async (data) => {
  // data = { taiKhoan : "" , matKhau: ""}
  try {
    const response = await fetcher.post('/QuanLyNguoiDung/DangNhap', data);
    return response.data.content;
  } catch (error) {
    throw Error(error);
  }
};
