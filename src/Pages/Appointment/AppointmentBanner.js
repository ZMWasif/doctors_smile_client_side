import React from "react";
import chair from "../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div className="hero min-h-screen bg-[url('/src/assets/images/bg.png')]">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Dentist Chair"
        />
        <div className="mr-10">
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
          ></DayPicker>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
