import React from "react";
import { Button, Flex } from "antd";
import { Link, NavLink } from "react-router-dom";
export default function Showtimes() {
  return (
    <>
      <main>
        <div className="container mx-auto max-w-[1360px] my-4 text-white ">
          <div className="flex justify-center my-5 text-3xl font-bold ">
            <h3>Phim đang chiếu</h3>
          </div>
          <div
            className=" flex items-center justify-center gap-2 xl:gap-4 flex-wrap "
            id="showtimes"
          >
            <NavLink
              to={"#"}
              className="text-[#0ab39c]  text-base font-semibold border-2 border-gray-500 rounded-lg bg-[#0d1016] hover:bg-[#393a3d] px-4 py-2"
            >
              10-12-2024
            </NavLink>
            <NavLink
              to={"/"}
              className="text-[#0ab39c]  text-base font-semibold border-2 border-gray-500 rounded-lg bg-[#0d1016] hover:bg-[#393a3d] px-4 py-2"
            >
              10-12-2024
            </NavLink>
            <NavLink
              to={"/"}
              className="text-[#0ab39c]  text-base font-semibold border-2 border-gray-500 rounded-lg bg-[#0d1016] hover:bg-[#393a3d] px-4 py-2"
            >
              10-12-2024
            </NavLink>
            <NavLink
              to={"/"}
              className="text-[#0ab39c]  text-base font-semibold border-2 border-gray-500 rounded-lg bg-[#0d1016] hover:bg-[#393a3d] px-4 py-2"
            >
              10-12-2024
            </NavLink>
            <NavLink
              to={"/"}
              className="text-[#0ab39c]  text-base font-semibold border-2 border-gray-500 rounded-lg bg-[#0d1016] hover:bg-[#393a3d] px-4 py-2"
            >
              10-12-2024
            </NavLink>
          </div>

          <p className="flex justify-center my-5 text-orange-400">
            <p className="font-bold">Lưu ý</p>: Khán giả dưới 13 tuổi chỉ chọn
            suất chiếu kết thúc trước 22h và Khán giả dưới 16 tuổi chỉ chọn suất
            chiếu kết thúc trước 23h.
          </p>
          <div className="flex gap-6 lg:flex-row flex-col">
            {/* Content */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 "
              style={{ flex: 7 }}
            >
              <Link
                to={"/moviedetail"}
                className="flex  border-2 border-gray-600  justify-between  rounded-[20px]"
              >
                <div>
                  <img
                    className="rounded-s-[20px] h-[320px] w-full object-cover"
                    src="https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=384&q=75"
                    alt="Movie Thumbnail"
                  />
                </div>
                <div style={{ flex: 5 }}>
                  <div className="flex px-6 pt-7 ">
                    <p className="">loạiádas</p>

                    <p className="ml-5">113 phút</p>
                  </div>
                  <div>
                    <p className="px-6 font-bold text-xl">Công tử bạc liêu</p>
                    <p className="px-6">Xuất xứ: Việt Nam</p>
                    <p className="px-6">Khởi chiếu:06/12/2000</p>
                    <p className="px-6">
                      T13 - Phim được phổ biến đến người xem từ đủ 13 tuổi trở
                      lên (13+)
                    </p>
                    <p className="px-6">Lịch chiếu</p>

                    <div className="grid grid-cols-4 ml-3 px-3 py-2">
                      <Link className="text-white rounded-md text-base font-semibold border bg-[#0d1016] hover:bg-[#393a3d]  py-1 px-4 mr-2 my-2">
                        23:20
                      </Link>
                      <Link className="text-white rounded-md text-base font-semibold border bg-[#0d1016] hover:bg-[#393a3d]  py-1 px-4 mr-2 my-2">
                        23:20
                      </Link>
                      <Link className="text-white rounded-md text-base font-semibold border bg-[#0d1016] hover:bg-[#393a3d]  py-1 px-4 mr-2 my-2">
                        23:20
                      </Link>
                      <Link className="text-white rounded-md text-base font-semibold border bg-[#0d1016] hover:bg-[#393a3d]  py-1 px-4 mr-2 my-2">
                        23:20
                      </Link>
                      <Link className="text-white rounded-md text-base font-semibold border bg-[#0d1016] hover:bg-[#393a3d]  py-1 px-4 mr-2 my-2">
                        23:20
                      </Link>
                      <Link className="text-white rounded-md text-base font-semibold border bg-[#0d1016] hover:bg-[#393a3d]  py-1 px-4 mr-2 my-2">
                        23:20
                      </Link>
                      <Link className="text-white rounded-md text-base font-semibold border bg-[#0d1016] hover:bg-[#393a3d]  py-1 px-4 mr-2 my-2">
                        23:20
                      </Link>
                    </div>
                  </div>
                </div>
                <div className=" border-2 border-gray-600 rounded-lg   h-[40px] py-2 px-4 m-3">
                  2D
                </div>
              </Link>
              <Link
                to={"/"}
                className="flex  border-2 border-gray-600  justify-between  rounded-[20px]"
              >
                <div>
                  <img
                    className="rounded-s-[20px] h-[320px] w-full object-cover"
                    src="https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=384&q=75"
                    alt="Movie Thumbnail"
                  />
                </div>
                <div style={{ flex: 5 }}>
                  <div className="flex px-6 pt-7 ">
                    <p className="">loạiádas</p>

                    <p className="ml-5">113 phút</p>
                  </div>
                  <div>
                    <p className="px-6 font-bold text-xl">Công tử bạc liêu</p>
                    <p className="px-6">Xuất xứ: Việt Nam</p>
                    <p className="px-6">Khởi chiếu:06/12/2000</p>
                    <p className="px-6">
                      T13 - Phim được phổ biến đến người xem từ đủ 13 tuổi trở
                      lên (13+)
                    </p>
                    <p className="px-6">Lịch chiếu</p>

                    <div className="grid grid-cols-4 ml-3 px-3 py-2">
                      <Link className="text-white rounded-md text-base font-semibold border bg-[#0d1016] hover:bg-[#393a3d]  py-1 px-4 mr-2 my-2">
                        23:20
                      </Link>
                      <Link className="text-white rounded-md text-base font-semibold border bg-[#0d1016] hover:bg-[#393a3d]  py-1 px-4 mr-2 my-2">
                        23:20
                      </Link>
                      <Link className="text-white rounded-md text-base font-semibold border bg-[#0d1016] hover:bg-[#393a3d]  py-1 px-4 mr-2 my-2">
                        23:20
                      </Link>
                      <Link className="text-white rounded-md text-base font-semibold border bg-[#0d1016] hover:bg-[#393a3d]  py-1 px-4 mr-2 my-2">
                        23:20
                      </Link>
                      <Link className="text-white rounded-md text-base font-semibold border bg-[#0d1016] hover:bg-[#393a3d]  py-1 px-4 mr-2 my-2">
                        23:20
                      </Link>
                      <Link className="text-white rounded-md text-base font-semibold border bg-[#0d1016] hover:bg-[#393a3d]  py-1 px-4 mr-2 my-2">
                        23:20
                      </Link>
                      <Link className="text-white rounded-md text-base font-semibold border bg-[#0d1016] hover:bg-[#393a3d]  py-1 px-4 mr-2 my-2">
                        23:20
                      </Link>
                    </div>
                  </div>
                </div>
                <div className=" border-2 border-gray-600 rounded-lg   h-[40px] py-2 px-4 m-3">
                  2D
                </div>
              </Link>
              <Link
                to={"/"}
                className="flex  border-2 border-gray-600  justify-between  rounded-[20px]"
              >
                <div>
                  <img
                    className="rounded-s-[20px] h-[320px] w-full object-cover"
                    src="https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=384&q=75"
                    alt="Movie Thumbnail"
                  />
                </div>
                <div style={{ flex: 5 }}>
                  <div className="flex px-6 pt-7 ">
                    <p className="">loạiádas</p>

                    <p className="ml-5">113 phút</p>
                  </div>
                  <div>
                    <p className="px-6 font-bold text-xl">Công tử bạc liêu</p>
                    <p className="px-6">Xuất xứ: Việt Nam</p>
                    <p className="px-6">Khởi chiếu:06/12/2000</p>
                    <p className="px-6">
                      T13 - Phim được phổ biến đến người xem từ đủ 13 tuổi trở
                      lên (13+)
                    </p>
                    <p className="px-6">Lịch chiếu</p>

                    <div className="grid grid-cols-4 ml-3 px-3 py-2">
                      <Link className="text-white rounded-md text-base font-semibold border bg-[#0d1016] hover:bg-[#393a3d]  py-1 px-4 mr-2 my-2">
                        23:20
                      </Link>
                      <Link className="text-white rounded-md text-base font-semibold border bg-[#0d1016] hover:bg-[#393a3d]  py-1 px-4 mr-2 my-2">
                        23:20
                      </Link>
                      <Link className="text-white rounded-md text-base font-semibold border bg-[#0d1016] hover:bg-[#393a3d]  py-1 px-4 mr-2 my-2">
                        23:20
                      </Link>
                      <Link className="text-white rounded-md text-base font-semibold border bg-[#0d1016] hover:bg-[#393a3d]  py-1 px-4 mr-2 my-2">
                        23:20
                      </Link>
                      <Link className="text-white rounded-md text-base font-semibold border bg-[#0d1016] hover:bg-[#393a3d]  py-1 px-4 mr-2 my-2">
                        23:20
                      </Link>
                      <Link className="text-white rounded-md text-base font-semibold border bg-[#0d1016] hover:bg-[#393a3d]  py-1 px-4 mr-2 my-2">
                        23:20
                      </Link>
                      <Link className="text-white rounded-md text-base font-semibold border bg-[#0d1016] hover:bg-[#393a3d]  py-1 px-4 mr-2 my-2">
                        23:20
                      </Link>
                    </div>
                  </div>
                </div>
                <div className=" border-2 border-gray-600 rounded-lg   h-[40px] py-2 px-4 m-3">
                  2D
                </div>
              </Link>
            </div>
            {/* End Content */}
          </div>
        </div>
      </main>
    </>
  );
}
