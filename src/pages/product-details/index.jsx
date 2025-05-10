import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  const { id } = useParams();
  const inputRef = React.useRef(null); //
  const [timer, setTimer] = React.useState(10);

  const timerRef = React.useRef(null);
  /**
   * useRef: Trả về một đối tượng có thuộc tính current
   * current là một thuộc tính có thể thay đổi được
   * current có thể là một giá trị bất kỳ
   * current có thể là một DOM element
   * Chú ý: useRef không phải là một state , không làm cho component rerender khi giá trị current thay đổi
   */

  React.useEffect(() => {
    // Gọi api lấy thông tin sản phẩm theo id
    if (id) {
      console.log('Gọi api lấy thông tin sản phẩm theo id: ', id);
    }
  }, [id]);

  React.useEffect(() => {
    inputRef.current.focus();
  }, []);

  React.useEffect(() => {
    timerRef.current = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, [timer]);

  return (
    <div>
      Lấy thông tin {id} từ url
      <input ref={inputRef} placeholder='Nhập username' className='p-3 rounded-xl border' />
      <div>{timer}</div>
      <button
        onClick={() => {
          clearInterval(timerRef.current);
        }}
      >
        Dừng timer
      </button>
    </div>
  );
}
