import React from 'react';
import { Col, Space, Typography, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
export default function ProductItem({ product }) {
  const navigate = useNavigate();
  //console.log('🔥 ~ ProductItem ~ props:', props); // {product1: "..."}

  const handleViewDetail = () => {
    console.log('View detail');
    navigate(`/product-details/${product.id}`); // slug
    // dynamic segment
  };
  return (
    <Space direction='vertical' size={12} className='w-full'>
      <img src={product?.image} className='w-full h-80 object-cover  rounded-2xl' />
      <Typography className='!text-2xl !font-semibold'>{product?.name}</Typography>
      <Typography className='!text-lg !font-semibold'>{product?.price}</Typography>
      <Button className='w-full' size='large' onClick={handleViewDetail}>
        View Detail
      </Button>
    </Space>
  );
}
