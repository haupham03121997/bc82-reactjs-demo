import React from 'react';
import { Row, Col, Button, Typography, Space, Skeleton } from 'antd';
import ProductItem from './ProductItem';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

// query,mutation
const handleFetchProducts = async () => {
  try {
    const response = await axios.get('https://apistore.cybersoft.edu.vn/api/Product');
    const data = response.data.content;
    return data;
  } catch (error) {
    throw Error(error);
  }
};

export default function ProductList() {
  const [count, setCount] = React.useState(0);

  const {
    data = [],
    isFetching,
    error,
    refetch,
  } = useQuery({
    queryFn: handleFetchProducts,
    queryKey: ['products'],
  });

  /**
   * useEffect: nhận vào 2 tham số
   * 1. Hàm callback (callback function): hàm này sẽ được gọi khi component được render lần đầu tiên
   * 2. Mảng dependencies (dependencies array): mảng này chứa các giá trị mà khi thay đổi sẽ khiến hàm callback được gọi lại
   *
   * Cách hoạt động:
   * - Khi component được render lần đầu tiên, hàm callback sẽ được gọi
   * - Nếu mảng dependencies không rỗng, hàm callback sẽ được gọi lại mỗi khi một trong các giá trị trong mảng thay đổi
   * - Chạy sau khi component render lần đầu tiên
   */

  // React.useEffect(() => {
  //   handleFetchProducts();
  // }, []);

  /**
   * Đối với mảng dependencies có giá trị là một biến (vd: count), thì hàm callback sẽ được gọi lại mỗi khi biến đó thay đổi
   * - Chạy sau khi component render lần đầu tiên và mỗi khi biến count thay đổi
   */
  React.useEffect(() => {
    // console.log('Count đã thay đổi: ', count);
    // document.title = `Giá trị count: ${count}`;
    if (count === 20) {
      setCount(count - 10);
    }
    // return () => {
    //   console.log('Cleanup function');
    // };
  }, [count]);

  /**
   * useEffect có cleanup function
   * - Chạy sau khi component render lần đầu tiên
   * - Chạy sau khi component render lại
   * - Chạy trước khi component bị unmount
   * - Chạy trước khi component bị xóa khỏi DOM
   * VD: xóa event listener, hủy timer, hủy request API...
   */

  React.useEffect(() => {
    const timer = setInterval(() => {
      console.log('Component đã được render');
    }, 1000);
    return () => {
      clearInterval(timer);
      console.log('Component đã bị unmount');
    };
  }, []);

  // const handleFetchProducts = () => {
  //   setIsLoading(true);
  //   axios
  //     .get('https://apistore.cybersoft.edu.vn/api/Product')
  //     .then((response) => {
  //       const data = response.data.content;
  //       setProducts(data);
  //     })
  //     .catch((error) => {
  //       console.log('Lỗi kết nối đến API', error);
  //       alert('Lỗi kết nối đến API');
  //     })
  //     .finally(() => {
  //       console.log('Kết thúc gọi API');
  //       setIsLoading(false);
  //     });
  // };

  // Lưu trên RAM: xxx , xyx

  const handleIncreaseCount = () => {
    setCount(count + 1);
  };

  const handleRefresh = () => {
    refetch();
  };

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Button onClick={handleIncreaseCount}>Tăng giá trị count lên 1</Button>
        <Typography.Title level={3}>Giá trị count: {count}</Typography.Title>
      </Col>
      {/* <Col span={4}>
        <ProductItem
          product={{
            name: 'Product 1',
            price: '$200',
            image: 'https://via.placeholder.com/150',
          }}
        />
      </Col> */}

      {isFetching && (
        <>
          {Array.from({ length: 8 }).map((_, index) => (
            <Col span={8} key={index}>
              <Skeleton.Node active={true} style={{ width: 650, height: 450 }} />
            </Col>
          ))}
        </>
      )}
      {!isFetching &&
        !error &&
        data.map((item) => {
          // item : { id: 1, name: 'Product 1', price: '$200', image: 'https://via.placeholder.com/150', ... }
          return (
            <Col span={8} key={item.id}>
              <ProductItem product={item} />
            </Col>
          );
        })}
      {!isFetching && error && (
        <div>
          Đã có lỗi xảy ra, vui lòng{' '}
          <Button type='link' onClick={handleRefresh}>
            thử lại!{' '}
          </Button>
        </div>
      )}
    </Row>
  );
}
