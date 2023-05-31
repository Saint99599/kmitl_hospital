import React, { useState } from 'react';

function DateDropdown({ selectedDate, onDateChange }) {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const days = Array.from({ length: 31 }, (_, index) => index + 1);
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, index) => currentYear - index);

  const handleDayChange = (event) => {
    setSelectedDay(event.target.value);
    onDateChange(selectedMonth, event.target.value, selectedYear);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    onDateChange(event.target.value, selectedDay, selectedYear);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    onDateChange(selectedMonth, selectedDay, event.target.value);
  };

  return (
    <div className='ml-3'>
      <select className="bg-white border border-gray-400 rounded-7 h-8" value={selectedDay} onChange={handleDayChange}>
        <option value="">วันที่</option>
        {days.map((day) => (
          <option key={day} value={day}>
            {day}
          </option>
        ))}
      </select>
      <select className="bg-white border border-gray-400 rounded-7 mx- h-8" value={selectedMonth} onChange={handleMonthChange}>
        <option value="">เดือน</option>
        {months.map((month, index) => (
          <option key={index} value={index + 1}>
            {month}
          </option>
        ))}
      </select>
      <select className="bg-white border border-gray-400 rounded-7 h-8" value={selectedYear} onChange={handleYearChange}>
        <option value="">Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DateDropdown;
