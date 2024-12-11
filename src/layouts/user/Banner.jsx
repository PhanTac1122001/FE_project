import React from "react";
import { Carousel } from "antd";

export default function Banner() {
  return (
    <>
      <Carousel autoplay arrows>
        <div>
          <img
            className="h-[calc(100vh_-_95px)] w-full  object-cover"
            src="https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018057.jpg&w=640&q=75"
          />
        </div>
        <div>
          <img
            className="h-[calc(100vh_-_95px)] w-full object-cover"
            src="https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018078.jpg&w=1920&q=75"
          />
        </div>
        <div>
          <img
            className="h-[calc(100vh_-_95px)] w-full object-cover"
            src="https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018074.jpg&w=1920&q=75"
          />
        </div>
      </Carousel>
    </>
  );
}
