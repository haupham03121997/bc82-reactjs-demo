import React, { useEffect } from 'react';
import { Button, Flex, Input, Space, Form } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { loginApi } from '../../apis/auth';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      taiKhoan: '',
      matKhau: '',
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      console.log('data', data);
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/');
      // localStorage.setItem("////")
      // toast
      // lưu lên redux
      // chuyển trang cho user về trang chủ hoặc trang admin
    },
    onError: (error) => {
      console.log('error', error);
      // toast lỗi
    },
  });

  const onSubmit = (values) => {
    //   values : {taiKhoan :"" , matKhau: ""}
    mutate(values);
  };

  if (localStorage.getItem('user')) {
    return <Navigate to='/' />;
  }

  return (
    <Form onFinish={handleSubmit(onSubmit)}>
      <Flex align='center' justify='center' vertical className='h-screen'>
        <Space size={8} className='w-[500px] shadow-2xl p-5 rounded-xl' direction='vertical'>
          <Form.Item label='Tài khoản' name='taiKhoan'>
            <Controller
              control={control}
              name='taiKhoan'
              render={({ field }) => <Input size='large' placeholder='Nhập tài khoản' {...field} />}
            />
          </Form.Item>

          <Form.Item label='Mật khẩu' name='Mật khẩu'>
            <Controller
              control={control}
              name='matKhau'
              render={({ field }) => <Input.Password size='large' placeholder='Nhập mật khẩu' {...field} />}
            />
          </Form.Item>

          <Form.Item className='flex justify-center'>
            <Button htmlType='submit' type='primary' size='large' loading={isPending}>
              Đăng nhập
            </Button>
          </Form.Item>
        </Space>
      </Flex>
    </Form>
  );
}
