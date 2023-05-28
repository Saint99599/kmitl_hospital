import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BookingContext } from '../function/BookingContext';

function Card({ employee }) {
  const { setBookingData } = useContext(BookingContext);

  const handleBooking = () => {
    setBookingData(employee);
  };

  return (
    <Link Link to="/booking" onClick={handleBooking} className="w-[460px] h-72 flex">
      <img className="h-full w-52" src={employee.image} alt="doctorImage" />
      <div className="w-full bg-white p-9">
        <p className="font-roboto font-bold text-lg text-gray-700 mb-4">
          {employee.fname} {employee.lname}
        </p>
        <p className="font-roboto font-normal text-xs leading-4 text-gray-700 mb-3">
          ID : {employee.id}
        </p>
        <p className="font-roboto font-normal text-xs leading-4 text-gray-700">
          Department :
        </p>
        <p className="font-roboto font-bold text-sm leading-4 text-gray-700 mb-3">
          {employee.department}
        </p>
        <p className="font-roboto font-normal text-xs leading-4 text-gray-700">
          Language :
        </p>
        <p className="font-roboto font-bold text-sm leading-4 text-gray-700">
          {employee.language.join(', ')}
        </p>
      </div>
    </Link>
  );
}

export default Card;
