import { Col, Row, Card, Progress, Button } from "antd";
import {
  AreaChartOutlined,
  ShoppingCartOutlined,
  DollarCircleOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import React from "react";

const style = {
  background: "#ffffff",
  padding: "16px",
  height: "150px",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
};
export default function Dashboard() {
  return (
    <>
      <div className="p-5 ">
        <div className="pb-5">
          <h3>Good Morning, Anna!</h3>
          <p>Here's what's happening with your store today.</p>
        </div>

        {/* Cột thông tin tổng quan */}
        <div className="pb-5">
          <Row gutter={16}>
            {/* Cột Total Earnings */}
            <Col span={6}>
              <Card style={style} className="text-center">
                <DollarCircleOutlined
                  style={{ fontSize: "40px", color: "#52c41a" }}
                />
                <h4>Total Earnings</h4>
                <p>$559.25k</p>
                <p className="text-green-500">+16.24%</p>
              </Card>
            </Col>

            {/* Cột Orders */}
            <Col span={6}>
              <Card style={style} className="text-center">
                <ShoppingCartOutlined
                  style={{ fontSize: "40px", color: "#1890ff" }}
                />
                <h4>Orders</h4>
                <p>36,894</p>
                <p className="text-red-500">-3.57%</p>
              </Card>
            </Col>

            {/* Cột Customers */}
            <Col span={6}>
              <Card style={style} className="text-center">
                <TeamOutlined style={{ fontSize: "40px", color: "#ff4d4f" }} />
                <h4>Customers</h4>
                <p>183.35M</p>
                <p className="text-green-500">+29.08%</p>
              </Card>
            </Col>

            {/* Cột My Balance */}
            <Col span={6}>
              <Card style={style} className="text-center">
                <AreaChartOutlined
                  style={{ fontSize: "40px", color: "#fa8c16" }}
                />
                <h4>My Balance</h4>
                <p>$165.89k</p>
                <p className="text-green-500">+0.00%</p>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Biểu đồ doanh thu */}
        <div className="w-full h-[500px] bg-blue-600 rounded-md mb-5">
          <h3 className="text-white p-4">Revenue</h3>
          <div className="text-center text-white">
            Chart or graph component here
          </div>
        </div>

        {/* Sales by Locations */}
        <div className="flex justify-between items-center">
          <h3>Sales by Locations</h3>
          <Button type="link" className="text-white">
            Export Report
          </Button>
        </div>
        <div className="w-full h-[300px] bg-white rounded-md shadow-md">
          <h3 className="text-center pt-8">Map or location stats here</h3>
        </div>
      </div>
    </>
  );
}
