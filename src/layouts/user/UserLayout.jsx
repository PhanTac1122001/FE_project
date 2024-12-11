import React from "react";

import HeaderLayout from "./HeaderLayout";

import FooterLayout from "./FooterLayout";
import { Outlet } from "react-router-dom";




export default function UserLayout() {
    
      return (
        <>
          <div className="bg-[#0d1016] min-h-screen">
          <HeaderLayout />
          <Outlet/>
            <FooterLayout />
          </div>
           
        </>
      );
}
