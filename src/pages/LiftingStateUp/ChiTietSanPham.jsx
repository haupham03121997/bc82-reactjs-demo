import React from "react";

const ChiTietSanPham = (props) => {
  const { spChiTiet } = props;
  return (
    <div className="flex max-w-3xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden border border-gray-200">
      {/* Hình ảnh */}
      <div className="w-1/3">
        <img src={spChiTiet.hinhAnh} className="object-cover h-full w-full" />
      </div>

      {/* Thông tin sản phẩm */}
      <div className="w-2/3 p-6">
        <p className="text-sm text-gray-400 mb-1">
          Mã sản phẩm: {spChiTiet.maSP}
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          tên: {spChiTiet.tenSP}
        </h2>
        <p className="text-lg text-blue-600 font-medium mb-4">
          {spChiTiet.giaBan}₫
        </p>
      </div>
    </div>
  );
};

export default ChiTietSanPham;
