import React from "react";
import { useSelector } from "react-redux";

const DemoRedux = () => {
  // hooks
  const dataRedux = useSelector((state) => {
    // chọn reducer cần lấy dữ liệu
    return state.userSlice;
  });
  console.log(dataRedux);
  return (
    <div>
      <p>
        {dataRedux.nguoiDung.hoTen} {dataRedux.nguoiDung.tuoi}
      </p>
    </div>
  );
};

export default DemoRedux;
