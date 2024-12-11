import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Promotion() {
  return (
    <>
      <div className="flex lg:flex-row lg:gap-[80px] flex-col">
        <h2 className="text-xl font-bold ">Khuyến mãi</h2>
        <NavLink to={"/"} className="mt-1">
          Xem tất cả
        </NavLink>
      </div>
      <Link>
        <div className="h-[150px] flex mt-5">
          <img
            className="rounded-lg w-full object-cover"
            src="https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=256&q=75"
            alt="Movie Thumbnail"
          />
        </div>
      </Link>

      <Link>
        <div className="h-[150px] flex mt-5">
          <img
            className="rounded-lg w-full object-cover"
            src="https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=256&q=75"
            alt="Movie Thumbnail"
          />
        </div>
      </Link>
      <Link>
        <div className="h-[150px] flex mt-5">
          <img
            className="rounded-lg w-full object-cover"
            src="https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0012808.jpeg&w=256&q=75"
            alt="Movie Thumbnail"
          />
        </div>
      </Link>
    </>
  );
}
