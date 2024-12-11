import { Footer } from "antd/es/layout/layout";
import React from "react";

export default function FooterLayout() {
  return (
    <>
      <Footer
        style={{
          textAlign: "center",
          color: "white",
          background: "#0b0d13",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </>
  );
}
