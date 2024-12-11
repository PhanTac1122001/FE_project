import { DownOutlined } from "@ant-design/icons";
import { Modal, Input, Button, Form } from "antd";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function HeaderLayout() {
  const [isRegisterModalVisible, setIsRegisterModalVisible] = useState(false);
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  // Hiển thị/Ẩn Modal Đăng ký
  const showRegisterModal = () => {
    setIsRegisterModalVisible(true);
  };
  const hideRegisterModal = () => {
    setIsRegisterModalVisible(false);
  };

  // Hiển thị/Ẩn Modal Đăng nhập
  const showLoginModal = () => {
    setIsLoginModalVisible(true);
  };
  const hideLoginModal = () => {
    setIsLoginModalVisible(false);
  };

  // Xử lý đăng ký
  const handleRegisterSubmit = (values) => {
    console.log("Register Form Data:", values);
    setIsRegisterModalVisible(false);
  };

  // Xử lý đăng nhập
  const handleLoginSubmit = (values) => {
    console.log("Login Form Data:", values);
    setIsLoginModalVisible(false);
  };

  return (
    <>
      <header className="bg-[#10141b] opacity-95 sticky top-0 z-20 px-6 ">
        <div className="container mx-auto max-w-[1360px] text-white flex items-center justify-between ">
          <div className="m-5">
            <img
              className="ml-4"
              width={80}
              src="https://chieuphimquocgia.com.vn/_next/image?url=%2Fimages%2Flogo.png&w=96&q=75"
            />
          </div>

          <div className="flex gap-8 text-lg">
            <NavLink to={"/"} className="hover:text-[#0ab39c]">
              Trang chủ
            </NavLink>
            <NavLink to={"/showtimes"} className="hover:text-[#0ab39c]">
              Lịch chiếu
            </NavLink>
            <NavLink to={"/asdasd"} className="hover:text-[#0ab39c]">
              Tin tức
            </NavLink>
            <NavLink to={"/asdad"} className="hover:text-[#0ab39c]">
              Khuyến mãi
            </NavLink>
            <NavLink to={"/ticket-price"} className="hover:text-[#0ab39c]">
              Giá vé
            </NavLink>
            <NavLink to={"/asdas"} className="hover:text-[#0ab39c]">
              Giới thiệu
            </NavLink>
          </div>
          <div>
            <Button
              className="m-5 px-6 py-4 rounded-[30px] bg-slate-700 border-none text-white font-medium"
              onClick={showRegisterModal}
            >
              Đăng ký
            </Button>
            <Button
              className="px-6 py-4 rounded-[30px] bg-red-800 border-none hover:!bg-slate-200 hover:!text-purple-800 text-white font-medium"
              onClick={showLoginModal}
            >
              Đăng nhập
            </Button>
          </div>
        </div>
      </header>

      {/* Modal Đăng ký */}
      <Modal
        title="Đăng ký"
        visible={isRegisterModalVisible}
        onCancel={hideRegisterModal}
        footer={null}
      >
        <Form onFinish={handleRegisterSubmit} layout="vertical">
          
          <Form.Item
            label="Tên tài khoản"
            name="username"
            rules={[{ required: true, message: "Vui lòng nhập tên tài khoản!" }]}
          >
            <Input placeholder="Tên tài khoản" />
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}
          >
            <Input placeholder="Số điện thoại" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Đăng ký
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Modal Đăng nhập */}
      <Modal
        title="Đăng nhập"
        visible={isLoginModalVisible}
        onCancel={hideLoginModal}
        footer={null}
      >
        <Form onFinish={handleLoginSubmit} layout="vertical">
          <Form.Item
            label="Tên tài khoản hoặc Email"
            name="usernameOrEmail"
            rules={[{ required: true, message: "Vui lòng nhập tên tài khoản hoặc email!" }]}
          >
            <Input placeholder="Tên tài khoản hoặc Email" />
          </Form.Item>
          <Form.Item
            label="Mật khẩu"
            name="password"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password placeholder="Mật khẩu" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Đăng nhập
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
