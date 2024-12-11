

import { Spin } from "antd";
import React, { Suspense } from "react";




const UserLayout = React.lazy(() => import("@/layouts/user/UserLayout"));
const TicketPrice = React.lazy(() => import("@/pages/user/TicketPrice"));
const Home = React.lazy(() => import("@/pages/user/Home"));
const Showtimes = React.lazy(() => import("@/pages/user/Showtimes"));
const MovieDetail = React.lazy(() => import("@/pages/user/MovieDetail"));
const SeatSelection = React.lazy(() => import("@/pages/user/SeatSelection"));
const CheckOut = React.lazy(() => import("@/pages/user/CheckOut"));
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

const userRouters = [
    {
        path: "/",
        element: <UserLayout />,
        children: [
          {
            index: true,
            element: (
              <LazyLoad>
                <Home />
              </LazyLoad>
            ),
            
          },
          {
            path: "ticket-price",
            element: <TicketPrice />,
          },
          {
            path: "showtimes",
            element: <Showtimes />,
            
          },
          {
            path: "moviedetail",
            element: <MovieDetail />,
          },
          {
            path: "seatselection",
            element: <SeatSelection />,
          },
          {
            path: "checkout",
            element: <CheckOut />,
          },
        ],
      },
  
];

export default userRouters;


