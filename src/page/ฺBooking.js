import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookingContext } from '../function/BookingContext';
import DateDropdown from '../component/DateDropdown';
import TimeSelector from '../component/TimeSelector';

function Booking() {
  const navigate = useNavigate();
  const { bookingData } = useContext(BookingContext);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleDateChange = (month, day, year) => {
    setSelectedMonth(month);
    setSelectedDay(day);
    setSelectedYear(year);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = () => {
    navigate('/inputbooking', {
      state: {
        selectedDate: formattedSelectedDate,
        selectedTime,
        fname: bookingData?.fname,
        lname: bookingData?.lname,
        image: bookingData?.image,
        department: bookingData?.department,
      },
    });
  };

  const formattedSelectedDate = selectedDay && selectedMonth && selectedYear ? new Date(selectedYear, selectedMonth - 1, selectedDay).toLocaleDateString(): '';

  return (
    <div className='flex justify-center'>
      <div className="w-2/3 h-72 flex bg-white shadow-2xl rounded-lg">
        <img className="h-full w-52" src={bookingData?.image} alt="doctorImage" />
        <div className="w-full bg-white pt-5 px-5">
          <div className="mb-5">
            <p className="font-roboto font-bold text-xl text-gray-700 mb-1">{bookingData?.fname} {bookingData?.lname}</p>
            <p className="font-roboto text-lg text-gray-700">Department :</p>
            <p className="font-roboto font-bold text-lg text-gray-700">{bookingData?.department}</p>
          </div>
          <div>
            <p className="font-roboto font-bold text-xl text-gray-700 mb-1 border-l-6 border-red-500">เลือกวันที่</p>
            <DateDropdown
              selectedDate={{ day: selectedDay, month: selectedMonth, year: selectedYear }}
              onDateChange={handleDateChange}
            />
            <p>{formattedSelectedDate}</p>
          </div>
          <div>
            <p className="font-roboto font-bold text-xl text-gray-700 mb-1 border-l-6 border-red-500">เลือกเวลา</p>
            <TimeSelector selectedTime={selectedTime} onTimeChange={handleTimeChange} />
            <p>{selectedTime}</p>
          </div>
        </div>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>ส่งค่า</button>
    </div>
  );
}

export default Booking;
