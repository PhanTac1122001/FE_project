import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Input, Button, Checkbox } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";

export default function SignUp() {
  return (
    <div
      className="min-h-screen bg-gray-100 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.pikbest.com/origin/09/19/03/61zpIkbEsTGjk.jpg!w700wp')",
      }}
    >
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-blue-600">VELZON</h1>
          <p className="text-gray-500">Sign in to continue to Velzon.</p>
        </div>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <Input
              size="large"
              prefix={<MailOutlined />}
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <Input.Password
              size="large"
              prefix={<LockOutlined />}
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between mb-4">
            <Checkbox>Remember me</Checkbox>
            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>
          <Button
            type="primary"
            size="large"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white border-none"
          >
            Sign In
          </Button>
        </form>
        <div className="text-center my-4 text-gray-500">- OR -</div>
        <div className="flex justify-center space-x-4">
          <Button className="bg-blue-700 text-white border-none hover:bg-blue-800">
            F
          </Button>
          <Button className="bg-red-500 text-white border-none hover:bg-red-600">
            G
          </Button>
          <Button className="bg-black text-white border-none hover:bg-gray-800">
            G
          </Button>
          <Button className="bg-blue-400 text-white border-none hover:bg-blue-500">
            T
          </Button>
        </div>
        <div className="text-center mt-6">
          <p>
            Don't have an account?
            <NavLink
          to={"/signup"}
          
        >
          
          Sign-In
        </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}
