import React from "react";

export default function ProductCard(props) {
  console.log(props.product); // product undifined
  console.log(<div></div>);
  // Binding data :
  // Cú pháp này giúp cho việc binding dữ liệu trở nên dễ dàng hơn
  // props.product.price = 99000;
  return (
    <>
      <div></div>
      <div>
        <div
          className="products__item"
          onClick={() => {
            // xử lý sự kiện click
            alert("Xem chi tiết sản phẩm");
          }}
        >
          <h3>{props.hoTen}</h3>
          {props.product && (
            <>
              <img src={props.product.image} />
              <p className="products__price">Giá: {props.product.price}</p>
              <p className="products__description">
                {props.product.description}
              </p>
            </>
          )}

          <button
            className="products__btn--details"
            onClick={() => {
              // xử lý sự kiện click
              alert("Xem chi tiết sản phẩm");
              props.setProductList(1);
            }}
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    </>
  );
}
