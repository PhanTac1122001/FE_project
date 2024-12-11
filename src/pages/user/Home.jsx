import { theme } from "antd";

import React from "react";

import { Link, NavLink } from "react-router-dom";
import { Content } from "antd/es/layout/layout";
import Banner from "@/layouts/user/Banner";
import MoviesShowing from "./MoviesShowing";
import UpcomingMovies from "./UpcomingMovies";

export default function Home() {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <div >
        <Banner />
      </div>
      <Content
        style={{
          background: "#10141b",
          padding: "0 48px",
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: "#10141b",
            borderRadius: borderRadiusLG,
          }}
        >
          <MoviesShowing />

          <UpcomingMovies />
        </div>
      </Content>
    </>
  );
}
