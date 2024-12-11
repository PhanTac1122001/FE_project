import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function UpcomingMovies() {
  return (
    <>
        <div className="container mx-auto max-w-[1360px] my-4 text-white">
        
            <div className="flex lg:flex-row lg:gap-[830px] flex-col mt-[100px]">
              <h2 className="text-xl font-bold mb-4">Phim sắp chiếu</h2>
              <NavLink to={"/"}>Xem tất cả</NavLink>
            </div>
            <div className="flex gap-6 lg:flex-row flex-col">
              {/* Content */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-fit"
                style={{ flex: 4 }}
              >
                <Link to={"/"} className="max-h-[400px]  p-2">
                  <img
                    className="rounded-lg h-[300px] w-full object-cover"
                    src="https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=384&q=75"
                    alt="Movie Thumbnail"
                  />
                  <div className="flex mt-2">
                    <p>asdasdsa</p>
                    <p className="ml-5">23/20/2001</p>
                  </div>
                  <p>ASDASDASDASD</p>
                </Link>
                <Link to={"/"} className="max-h-[400px]  p-2">
                  <img
                    className="rounded-lg h-[300px] w-full object-cover"
                    src="https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=384&q=75"
                    alt="Movie Thumbnail"
                  />
                  <div className="flex mt-2">
                    <p>asdasdsa</p>
                    <p className="ml-5">23/20/2001</p>
                  </div>
                  <p>ASDASDASDASD</p>
                </Link>
                <Link to={"/"} className="max-h-[400px]  p-2">
                  <img
                    className="rounded-lg h-[300px] w-full object-cover"
                    src="https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=384&q=75"
                    alt="Movie Thumbnail"
                  />
                  <div className="flex mt-2">
                    <p>asdasdsa</p>
                    <p className="ml-5">23/20/2001</p>
                  </div>
                  <p>ASDASDASDASD</p>
                </Link>
                <Link to={"/"} className="max-h-[400px]  p-2">
                  <img
                    className="rounded-lg h-[300px] w-full object-cover"
                    src="https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=384&q=75"
                    alt="Movie Thumbnail"
                  />
                  <div className="flex mt-2">
                    <p>asdasdsa</p>
                    <p className="ml-5">23/20/2001</p>
                  </div>
                  <p>ASDASDASDASD</p>
                </Link>
                <Link to={"/"} className="max-h-[400px]  p-2">
                  <img
                    className="rounded-lg h-[300px] w-full object-cover"
                    src="https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=384&q=75"
                    alt="Movie Thumbnail"
                  />
                  <div className="flex mt-2">
                    <p>asdasdsa</p>
                    <p className="ml-5">23/20/2001</p>
                  </div>
                  <p>ASDASDASDASD</p>
                </Link>
                <Link to={"/"} className="max-h-[400px]  p-2">
                  <img
                    className="rounded-lg h-[300px] w-full object-cover"
                    src="https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=384&q=75"
                    alt="Movie Thumbnail"
                  />
                  <div className="flex mt-2">
                    <p>asdasdsa</p>
                    <p className="ml-5">23/20/2001</p>
                  </div>
                  <p>ASDASDASDASD</p>
                </Link>
                <Link to={"/"} className="max-h-[400px]  p-2">
                  <img
                    className="rounded-lg h-[300px] w-full object-cover"
                    src="https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=384&q=75"
                    alt="Movie Thumbnail"
                  />
                  <div className="flex mt-2">
                    <p>asdasdsa</p>
                    <p className="ml-5">23/20/2001</p>
                  </div>
                  <p>ASDASDASDASD</p>
                </Link>
              </div>
              {/* End Content */}
              <div className="flex-1"
              >
                <a to={"/"} className="max-h-[400px] w-[250px]  h-fit p-2 hidden">
                  
                </a>
              </div>
            </div>
            
          </div>
          
    </>
  )
}
