import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import { Button, Modal } from "antd";
export default function MovieDetail() {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [showSeatSelection, setShowSeatSelection] = useState(false);

  // const rows = [
  //   ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "A11"],
  //   ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10", "B11"],
  //   ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "C11"],
  //   ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11"],
  //   ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10", "E11"],
  //   ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11"],
  //   ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "G10", "G11"],
  //   ["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "H11"],
  //   ["I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9", "I10"],
  // ];
  const rows = [
    [
        { id: "A1", type: "regular" },
        { id: "A2", type: "regular" },
        { id: "A3", type: "vip" },
        { id: "A4", type: "couple" },
        { id: "A5", type: "booked" },
        // ...
    ],
    // ...
];
  const handleSeatClick = (seat) => {
    if (seat.type === "booked") return;
    if (selectedSeats.includes(seat.id)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat.id));
    } else {
      setSelectedSeats([...selectedSeats, seat.id]);
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  const closeModal = () => {
    setShowSeatSelection(false);
  };
  const handleOk = () => {
    setIsModalVisible(false);
    alert(`Seats booked: ${selectedSeats.join(", ")}`);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <div
        className="relative w-full h-[470px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=384&q=75')",
        }}
      >
        {/* Overlay để làm mờ nền */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-70"></div>

        {/* Phần chứa nội dung */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white bg-opacity-90 ">
          <div className="flex flex-col md:flex-row items-center md:items-start bg-opacity-90  rounded-lg p-5 gap-6">
            {/* Ảnh */}
            <div className="relative z-10">
              <img
                className="rounded-lg h-[400px] w-[250px] object-cover shadow-lg"
                src="https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0017609_0.jpg&w=384&q=75"
                alt="Movie Thumbnail"
              />
            </div>

            {/* Nội dung chi tiết */}
            <div className="flex-1 z-10">
              <div className="flex items-center justify-between">
                <p className="font-bold text-xl">Công tử bạc liêu</p>
                <div className="border-2 text-xl font-bold rounded-2xl py-2 px-4">
                  2D
                </div>
              </div>
              <div className="flex flex-wrap gap-3 ">
                <p>Loại: Hài</p>
                <p>113 phút</p>
              </div>
              <div className="pt-4">
                <p>Đạo diễn: Lý Minh Thắng</p>
                <p>Xuất xứ: Việt Nam</p>
                <p>Diễn viên: Song Luân</p>
                <p>Khởi chiếu: 06/12/2000</p>
                <p className="w-[500px] pt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Saepe, eos unde. Autem iusto, maiores nobis quisquam
                  consectetur blanditiis consequuntur necessitatibus similique
                  at nisi temporibus ea exercitationem natus itaque eligendi
                  illo?
                </p>
                <p className="text-red-600">
                  Kiểm duyệt: T13 - Phim được phổ biến đến người xem từ đủ 13
                  tuổi trở lên (13+)
                </p>
              </div>
              <div className="pt-6 ">
                <a href="#">Chi tiết nội dung</a>
                <Button className="ml-6 px-6 py-4 rounded-[30px]  !border-yellow-300  !bg-orange-400 text-white !font-bold">
                  Xem trailer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Detail */}
      <div
        className="flex justify-center items-center text-[#e4e1e1] bg-[#1a1d23]"
        id="dates"
      >
        <NavLink className="text-center p-4 text-lg" to={"/"}>
          Th.12 <p className="font-bold ">11</p> Thứ tư
        </NavLink>
        <NavLink className="text-center p-4 text-lg bg-red">
          Th.12 <p className="font-bold ">11</p> Thứ tư
        </NavLink>
      </div>
      {/* End Date */}
      <div className="text-center text-[#e4e1e1] bg-[#10141b] py-6" id="date">
        <p className="text-[#f68c1e] mb-4">
          <label className="font-bold">Lưu ý:</label> Khán giả dưới 13 tuổi chỉ
          chọn suất chiếu kết thúc trước 22h và Khán giả dưới 16 tuổi chỉ chọn
          suất chiếu kết thúc trước 23h.
        </p>
        {!showSeatSelection && (
          <div className="mx-auto w-full max-w-4xl py-6 space-y-6 relative">
            <div
              className="grid grid-cols-5 grid-rows-subgrid gap-2 xl:gap-4 px-4 xl:px-0 container justify-center items-center "
              id="times"
            >
              <NavLink
                to="#"
                className="py-3 px-8 font-bold rounded-3xl !bg-[#10141b] !border-2 !border-slate-600 text-white hover:!bg-[#293145]"
                onClick={() => setShowSeatSelection(true)} // Chuyển trạng thái hiển thị
              >
                09:15
              </NavLink>
              <NavLink className="py-3 px-8 font-bold rounded-3xl !bg-[#10141b] !border-2 !border-slate-600	 text-white hover:!bg-[#293145]">
                09:15
              </NavLink>
              <NavLink className="py-3 px-8 font-bold rounded-3xl !bg-[#10141b] !border-2 !border-slate-600	 text-white hover:!bg-[#293145]">
                09:15
              </NavLink>
              <NavLink className="py-3 px-8 font-bold rounded-3xl !bg-[#10141b] !border-2 !border-slate-600	 text-white hover:!bg-[#293145]">
                09:15
              </NavLink>
              <NavLink className="py-3 px-8 font-bold rounded-3xl !bg-[#10141b] !border-2 !border-slate-600	 text-white hover:!bg-[#293145]">
                09:15
              </NavLink>
              <NavLink className="py-3 px-8 font-bold rounded-3xl !bg-[#10141b] !border-2 !border-slate-600	 text-white hover:!bg-[#293145]">
                09:15
              </NavLink>
              <NavLink className="py-3 px-8 font-bold rounded-3xl !bg-[#10141b] !border-2 !border-slate-600	 text-white hover:!bg-[#293145]">
                09:15
              </NavLink>
            </div>
          </div>
        )}

        {showSeatSelection && (
          <div className="min-h-screen bg-gray-900 text-white p-4">
            <h1 className="text-2xl text-center">Movie Seat Selection</h1>
            <div className="mt-6 mx-auto max-w-4xl">
              {rows.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center mb-2">
                  {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex justify-center mb-2">
                      {row.map((seat) => (
                        <Button
                          key={seat.id}
                          style={{
                            width: "50px",
                            height: "50px",
                            textAlign: "center",
                            padding: "0",
                            backgroundColor: selectedSeats.includes(seat.id)
                              ? "blue" // Ghế đang chọn
                              : seat.type === "booked"
                              ? "black"
                              : seat.type === "vip"
                              ? "orange"
                              : seat.type === "couple"
                              ? "red"
                              : "darkgray", 
                            color: "white",
                          }}
                          className="m-1"
                          onClick={() => handleSeatClick(seat)}
                        >
                          {seat.id}
                        </Button>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-4 ">
              <Button
                className="!text-white"
                type="primary"
                onClick={closeModal}
              >
                Quay lại
              </Button>
              <Link
              to={"/checkout"}
                className="!text-white"
                type="primary"
                
              >
                Thanh Toán
              </Link>
            </div>
            
          </div>
        )}
      </div>
    </>
  );
}
