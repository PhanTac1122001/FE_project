import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Event() {
  return (
    <>
      <div>
        <div className="flex  lg:flex-row lg:gap-[120px] flex-col mt-10">
          <h2 className="text-xl font-bold ">Sự kiện</h2>
          <NavLink to={"/"} className="mt-1">
            Xem tất cả
          </NavLink>
        </div>
        <Link>
          <div className="h-[150px] flex mt-5">
            <img
              className="rounded-lg w-full object-cover"
              src="https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=384&q=75"
              alt="Movie Thumbnail"
            />
          </div>
        </Link>

        <Link>
          <div className="h-[150px] flex mt-5">
            <img
              className="rounded-lg w-full object-cover"
              src="https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=384&q=75"
              alt="Movie Thumbnail"
            />
          </div>
        </Link>
        <Link>
          <div className="h-[150px] flex mt-5">
            <img
              className="rounded-lg w-full object-cover"
              src="https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=384&q=75"
              alt="Movie Thumbnail"
            />
          </div>
        </Link>

        <Link>
          <div className="h-[150px] flex mt-5">
            <img
              className="rounded-lg w-full object-cover"
              src="https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=384&q=75"
              alt="Movie Thumbnail"
            />
          </div>
        </Link>
      </div>
    </>
  );
}
