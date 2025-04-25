import React, { useState } from "react";
import imgXe from "./../../assets/products/black-car.jpg";
const DemoState = () => {
  // state ==> hook ==> hàm react cung cấp ==> muốn thay đổi state phải chạy phương thức cập nhật state
  // destructuring
  let [state, setState] = useState(10); // 12 like
  const [hoTen, setHoTen] = useState("Đức Huy");
  const [font, setFont] = useState(30);
  const [imgCar, setImgCar] = useState("black-car.jpg");
  // console.log(state);
  let like = 1;
  console.log("like", like);
  let styleButton = "py-2 px-5 text-white rounded-2xl";
  let styleInline = {
    fontSize: "30px",
  };

  function handleChangeFontSize(check) {
    // "tang" || "giam"
    // let value = check == "tang" ? 2 : -2 // 2 || -2
    let value = check === "tang" ? font + 2 : font - 2;

    setFont(value);
  }

  function handleChangeImgCar(tenHinhAnh) {
    setImgCar(tenHinhAnh);
  }
  console.log(font);
  return (
    <div>
      <h2>Demo về cách tạo và sử dụng state</h2>
      <div>
        <p>{state}</p>
        <button
          onClick={() => {
            // like++;
            // setState(40);
            setState((prev) => {
              return prev + 2;
            });
          }}
          className="px-4 py-2 bg-orange-500 text-white rounded-md"
        >
          Bấm tăng like
        </button>
      </div>
      <div>
        <p></p>
        <input
          type="text"
          onChange={(event) => {
            setHoTen(event.target.value);
          }}
          value={hoTen}
        />
      </div>
      <div className="py-10">
        <h2>Bài tập tăng giảm kích thước chữ</h2>
        <p
          style={{
            fontSize: font + "px",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
          beatae?
        </p>
        <button
          onClick={() => {
            handleChangeFontSize("tang");
          }}
          className={styleButton + " bg-orange-500"}
        >
          Tăng kích thước
        </button>
        <button
          onClick={() => {
            handleChangeFontSize("giam");
          }}
          className={styleButton + " bg-red-500"}
        >
          Giảm kích thước
        </button>
      </div>
      <div className="flex items-start gap-5">
        <img src={`./products/${imgCar}`} alt="" />
        <div className="space-x-3">
          <button
            onClick={() => {
              handleChangeImgCar("black-car.jpg");
            }}
            className={styleButton + " bg-black"}
          >
            Xe đen
          </button>
          <button
            onClick={() => {
              handleChangeImgCar("red-car.jpg");
            }}
            className={styleButton + " bg-red-500"}
          >
            Xe đỏ
          </button>
          <button
            onClick={() => {
              handleChangeImgCar("silver-car.jpg");
            }}
            className={styleButton + " bg-gray-500"}
          >
            Xe bạc
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoState;
