import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import DemoState from './components/DemoState/DemoState';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import DemoTemplate from './templates/DemoTemplate';
import HomeTemplate from './templates/HomeTemplate';
import DanhSachSanPham from './pages/LiftingStateUp/DanhSachSanPham';
import DemoRedux from './pages/demoRedux/DemoRedux';
import ProductList from './pages/product-list';
import ProductDetails from './pages/product-details';

// BEM: Block Element Modifier
// isEmail // camelCase

function App() {
  const [productList, setProductList] = useState([
    {
      name: 'Iphone 15 Pro Max',
      price: '20.000.000',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae.',
      image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg',
    },
    {
      name: 'Iphone 15 Pro Max',
      price: '35.000.000',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae.',
      image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg',
    },
    {
      name: 'Iphone 15 Pro Max',
      price: '30.000.000',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae.',
      image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg',
    },
    {
      name: 'Iphone 15 Pro Max',
      price: '30.000.000',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae.',
      image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg',
    },
    {
      name: 'Iphone 15 Pro Max',
      price: '30.000.000',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae.',
      image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg',
    },
    {
      name: 'Iphone 15 Pro Max',
      price: '30.000.000',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae.',
      image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg',
    },
    {
      name: 'Iphone 15 Pro Max',
      price: '30.000.000',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae.',
      image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg',
    },
    {
      name: 'Iphone 15 Pro Max',
      price: '30.000.000',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae.',
      image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg',
    },
    {
      name: 'Iphone 16 Pro Max',
      price: '30.000.000',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae.',
      image: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-tim-1-600x600.jpg',
    },
  ]);

  const renderProductCard = () => {
    const elements = productList.map(() => {
      return <ProductCard />;
    });

    return elements;
  };

  function handleUpdatePrice() {
    const newProductList = [...productList];
    newProductList[0].price = '50.000.000';
    // console.log(newProductList);
    setProductList(newProductList);
  }

  console.log(productList);

  return (
    <>
      <Routes>
        {/* path đường dẫn mà người dùng sẽ tới  */}
        {/* element sẽ nhận vào Component hoặc JSX cần hiển thị  */}
        <Route path='/demo' element={<div>Hello BC82</div>} />
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path='/' element={<HomeTemplate />}>
          <Route index element={<HomePage />} />
          <Route path='/danh-sach-san-pham' element={<DanhSachSanPham />} />
          <Route path='/demo-redux' element={<DemoRedux />} />
          <Route path='/product-list' element={<ProductList />} />
          <Route path='/product-details/:id' element={<ProductDetails />} />
          {/* :id sẽ là tham số: 1 , 2 , 3 .... */}
          {/* /product-details/1 ,/product-details/2, /product-details/3 */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
