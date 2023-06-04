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

  const handleBack = () => {
    navigate('/home');
  };

  const formattedSelectedDate = selectedDay && selectedMonth && selectedYear ? new Date(selectedYear, selectedMonth - 1, selectedDay).toLocaleDateString(): '';

  return (
      <div className='pt-20'>
        <div className="border-l-8 border-orange-600 pl-1.5 mb-9 ml-40 ">
          <h1 className="font-roboto font-semibold text-4xl">นัดหมายแพทย์</h1>
        </div>
        
        <div className='flex justify-center'>
          <div className="w-3/5 flex bg-white shadow-2xl rounded-xl overflow-hidden">
            <img className="h-full w-52" src={bookingData?.image} alt="doctorImage" />
            <div className="w-full bg-white py-5 px-5">
              <div className="mb-5">
                <p className="font-roboto font-bold text-xl text-gray-700 mb-1">{bookingData?.fname} {bookingData?.lname}</p>
                <p className="font-roboto text-lg text-gray-700">Department :</p>
                <p className="font-roboto font-bold text-lg text-gray-700">{bookingData?.department}</p>
              </div>
              <div className='mb-4'>
                <div className='border-l-4 border-orange-600 pl-1.5 '>
                  <p className="font-roboto font-bold text-xl text-gray-700 mb-3.5">เลือกวันที่</p>
                </div>
                <DateDropdown
                  selectedDate={{ day: selectedDay, month: selectedMonth, year: selectedYear }}
                  onDateChange={handleDateChange}
                />
              </div>
              <div className='mb-4'>
                <div className='border-l-4 border-orange-600 pl-1.5 '>
                  <p className="font-roboto font-bold text-xl text-gray-700 mb-3.5">เลือกเวลา</p>
                </div>
                <TimeSelector selectedTime={selectedTime} onTimeChange={handleTimeChange} />
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-around mt-11'>
          <button className="w-32 h-11 font-roboto font-bold text-base py-1.5 rounded-lg text-white bg-orange-600" onClick={handleBack}>ย้อนกลับ</button>
          <button className="w-32 h-11 font-roboto font-bold text-base py-1.5 rounded-lg text-white bg-orange-600" onClick={handleSubmit}>ถัดไป</button>
        </div>
      </div>
  );
}

export default Booking;
