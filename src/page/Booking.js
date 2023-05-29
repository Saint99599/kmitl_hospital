import React, { useContext, useState } from 'react';
import { BookingContext } from '../function/BookingContext';

function Booking() {
  const { bookingData } = useContext(BookingContext);

  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected Option:', selectedOption);
  };

  return (
    <div className='flex justify-center '>
      <div className="w-2/3 h-72 flex bg-white shadow-2xl rounded-lg">
        <img className="h-full w-52" src={bookingData?.image} alt="doctorImage" />
        <div className="w-full bg-white pt-4 flex justify-center">
          <div className='flex justify-start'>
            <p className="font-roboto font-bold text-lg text-gray-700 mb-4">เลือกวันที่</p>
          </div>
        </div>
        <div className="w-full bg-white pt-4 flex justify-center">
          <p className="font-roboto font-bold text-lg text-gray-700 mb-4">เลือกเวลา</p>
          <form onSubmit={handleSubmit}>
      <label>
        <input
          type="radio"
          value="option1"
          checked={selectedOption === 'option1'}
          onChange={handleOptionChange}
        />
        Option 1
      </label>

      <label>
        <input
          type="radio"
          value="option2"
          checked={selectedOption === 'option2'}
          onChange={handleOptionChange}
        />
        Option 2
      </label>

      <label>
        <input
          type="radio"
          value="option3"
          checked={selectedOption === 'option3'}
          onChange={handleOptionChange}
        />
        Option 3
      </label>

      <button type="submit">Submit</button>
    </form>
        </div>
        <div className="w-full bg-white pt-4 flex justify-center">
          <p className="font-roboto font-bold text-lg text-gray-700 mb-4">
            {bookingData?.fname} {bookingData?.lname}
          </p>
        </div>
          {/* <p className="font-roboto font-normal text-xs leading-4 text-gray-700 mb-3">
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
          </p> */}
        
      </div>
    </div>
    
    // <div>
    //   <h1>Booking Details</h1>
    //   <p>Employee: {bookingData?.fname} {bookingData?.lname}</p>
    //   <p>Department: {bookingData?.department}</p>
    //   <p>Languages: {bookingData?.language?.join(', ')}</p>
    // </div>
  );
}

export default Booking;
