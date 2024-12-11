import React from "react";
import { Input, Button, Checkbox, Form, Row, Col, Card } from "antd";
import {
  FacebookOutlined,
  GoogleOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-green-500 to-blue-500">
      <Row className="w-full max-w-4xl">
        {/* Left Side Background with Quote */}
        <Col
          span={12}
          className="bg-cover bg-center text-white p-10"
          style={{ backgroundImage: "url(https://png.pngtree.com/thumb_back/fh260/background/20230511/pngtree-nature-background-sunset-wallpaer-with-beautiful-flower-farms-image_2592160.jpg)" }}
        >
          <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
            <p className="text-xl italic">
              "Great! Clean code, clean design, easy for customization. Thanks
              very much!"
            </p>
          </div>
        </Col>

        {/* Right Side Login Form */}
        <Col span={12} className="bg-white p-8 rounded-lg shadow-lg">
          <Card className="w-full">
            <h3 className="text-2xl font-semibold mb-4">Welcome Back!</h3>
            <p className="mb-6 text-gray-600">Sign in to continue to Velzon.</p>

            <Form
              name="login"
              initialValues={{ remember: true }}
              onFinish={() => {
                console.log("Login Form Submitted");
              }}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input
                  placeholder="Username"
                  className="rounded-md border-gray-300"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  className="rounded-md border-gray-300"
                />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  block
                  className="bg-teal-500 text-white hover:bg-teal-600 rounded-md"
                >
                  Sign In
                </Button>
              </Form.Item>
            </Form>

            <div className="text-center mt-6">
              <p>Sign In with</p>
              <div className="flex justify-center space-x-4">
                <Button
                  shape="circle"
                  icon={<GoogleOutlined />}
                  className="bg-white text-gray-800 hover:text-white hover:bg-red-500"
                />
                <Button
                  shape="circle"
                  icon={<FacebookOutlined />}
                  className="bg-white text-gray-800 hover:text-white hover:bg-blue-600"
                />
                <Button
                  shape="circle"
                  icon={<TwitterOutlined />}
                  className="bg-white text-gray-800 hover:text-white hover:bg-blue-400"
                />
              </div>
            </div>

            <p className="text-center mt-6">
              Don't have an account? <NavLink to={"/signup"} className="text-blue-500">Sign-In</NavLink>
            </p>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
