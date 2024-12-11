import { Spin } from "antd";
import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Dashboard = React.lazy(() => import("@/pages/admin/Dashboard"));
const CategoryManager = React.lazy(() =>
  import("@/pages/admin/CategoryManager")
);
const ProductManager = React.lazy(() => import("@/pages/admin/ProductManager"));
const SignUp = React.lazy(() => import("@/pages/auth/SignUp"));
const Login = React.lazy(() => import("@/pages/auth/Login"));
const AdminLayout = React.lazy(() => import("@/layouts/admin/AdminLayout"));
const contentStyle = {
  padding: 50,
  background: "rgba(0, 0, 0, 0.05)",
  borderRadius: 4,
};
const content = <div style={contentStyle} />;
const LazyLoad = ({ children }) => {
  return (
    <Suspense
      fallback={
        <Spin tip="Loading" size="large">
          {content}
        </Spin>
      }
    >
      {children}
    </Suspense>
  );
};

const adminRouters = [
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: (
          <LazyLoad>
            <Dashboard />
          </LazyLoad>
        ),
      },
      {
        path: "category",
        element: (
          <LazyLoad>
            <CategoryManager />
          </LazyLoad>
        ),
      },
      {
        path: "product",
        element: (
          <LazyLoad>
            <ProductManager />
          </LazyLoad>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
];

export default adminRouters;
