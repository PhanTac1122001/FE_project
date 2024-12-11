import React, { useState } from "react";
import { Button, Radio, Input, Form } from "antd";
export default function CheckOut() {
  const [paymentMethod, setPaymentMethod] = useState("VietQR"); // Default payment method
  const [amount, setAmount] = useState(210000); // Total amount

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (values) => {
    console.log("Payment info:", values);
    // Handle payment process here
  };

  return (
    <>
    <div className="bg-[#10141b]">
    <div className="p-6 mx-auto max-w-[1360px] my-4 text-white rounded-lg shadow-xl">
        <div className="flex justify-between mb-6">
          {/* Left side - Movie info */}
          <div className="w-3/5">
            {/* Thông tin phim */}
            <div className="mb-2 p-5 bg-[#1a1d23] rounded-2xl ">
              <h2 className="text-2xl font-semibold mb-4">Thông tin phim</h2>
              <p className="mb-4"><strong>Phim:</strong> CÔNG TỬ BẠC LIÊU-T13</p>
              <p className="mb-4"><strong>Ngày giờ chiếu:</strong> 16:30 - 11/12/2024</p>
              <p className="mb-4"><strong>Định dạng:</strong> 2D</p>
              <p className="mb-4"><strong>Phòng chiếu:</strong> 5</p>
            </div>

            {/* Thông tin thanh toán */}
            <div className="mb-2 mt-6 p-5 bg-[#1a1d23] rounded-2xl ">
              <h3 className="text-xl font-semibold ">Thông tin thanh toán</h3>
              <div className="mt-4 ring-1 ring-gray-700 sm:mx-0 rounded-xl">
              <table className="min-w-full divide-y divide-gray-600">
                <thead>
                  <tr>
                    <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-6">Danh mục</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">Số lượng</th>
                    <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">Tổng tiền</th>
                  </tr>
                </thead>
                <tbody >
                  <tr>
                    <td className="relative py-4 pl-4 pr-3 text-sm sm:pl-6">Ghế (C15, C14, C13)</td>
                    <td className="px-3 py-3.5 text-sm">3</td>
                    <td className="px-3 py-3.5 text-sm">210.000đ</td>
                  </tr>
                </tbody>
              </table>
              </div>
              
            </div>

           
          </div>

          {/* Right side - Payment Method */}
          <div className="w-2/5  p-6 bg-[#1a1d23] rounded-2xl ml-6">
            <h2 className="text-xl font-semibold mb-4">Phương thức thanh toán</h2>
            <Radio.Group
              onChange={handlePaymentChange}
              value={paymentMethod}
              className="flex flex-col gap-4"
            >
              <Radio value="VietQR" className="text-white">VietQR</Radio>
              <Radio value="VNPay" className="text-white">VNPay</Radio>
              <Radio value="ViettelMoney" className="text-white">Viettel Money</Radio>
              <Radio value="Payoo" className="text-white">Payoo</Radio>
            </Radio.Group>
            <div className="mt-6">
            <h3 className="text-xl font-semibold mb-6">Chi phí</h3>
              <p><strong>Thanh toán:</strong> {amount.toLocaleString()}đ</p>
              <p><strong>Phí:</strong> 0đ</p>
              <p><strong>Tổng cộng:</strong> {amount.toLocaleString()}đ</p>
            </div>
            <div className="mt-6">
              <Form onFinish={handleSubmit} layout="vertical">
                <Form.Item>
                  <Button
                    type="primary"
                    className="w-full py-6 rounded-3xl bg-[#ee2f36] hover:bg-[#d9362f] text-white font-medium "
                  >
                    Thanh toán
                  </Button>
                </Form.Item>
                <Form.Item>
                  <Button
                    type="link"
                    block
                    className= " w-full py-6 rounded-3xl text-white font-medium hover:!bg-[#1e293b] hover:!text-white"
                  >
                    Quay lại
                  </Button>
                </Form.Item>
              </Form>
            </div>

            <p className="text-sm text-orange-500 mt-4 text-center">
              Lưu ý: Không mua vé cho trẻ em dưới 13 tuổi đối với các suất chiếu phim kết thúc sau 22h00 và không mua vé cho trẻ em dưới 16 tuổi đối với các suất chiếu phim kết thúc sau 23h00.
            </p>
          </div>
        </div>
      </div>
    </div>
      
    </>
  );
}
