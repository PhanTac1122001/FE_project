import React, { useState } from "react";
import { Button, Modal } from "antd";

export default function SeatSelection() {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const rows = [
        ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "A11"],
        ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10", "B11"],
        ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "C11"],
        ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11"],
        ["E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10", "E11"],
        ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11"],
        ["G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "G10", "G11"],
        ["H1", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "H11"],
        ["I1", "I2", "I3", "I4", "I5", "I6", "I7", "I8", "I9", "I10"],
    ];

    const handleSeatClick = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        alert(`Seats booked: ${selectedSeats.join(", ")}`);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4">
            <h1 className="text-2xl text-center">Movie Seat Selection</h1>
            <div className="mt-6 mx-auto max-w-4xl">
                {rows.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex justify-center mb-2">
                        {row.map((seat) => (
                            <Button
                                key={seat}
                                style={{ width: "50px", height: "50px", textAlign: "center", padding: "0" }}
                                className={`m-1 ${selectedSeats.includes(seat) ? "bg-blue-600" : "bg-gray-700"} text-white`}
                                onClick={() => handleSeatClick(seat)}
                            >
                                {seat}
                            </Button>
                        ))}
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-4">
                <Button
                    type="primary"
                    onClick={showModal}
                    disabled={selectedSeats.length === 0}
                >
                    Proceed to Checkout
                </Button>
            </div>
            <Modal
                title="Confirm Seats"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                okText="Confirm"
                cancelText="Cancel"
            >
                <p>You have selected the following seats:</p>
                <p>{selectedSeats.join(", ")}</p>
            </Modal>
        </div>
    );
}
