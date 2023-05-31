import React, { useState } from 'react';

function TimeSelector({ selectedTime, onTimeChange }) {
  const [selectedOption, setSelectedOption] = useState(selectedTime);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onTimeChange(option);
  };

  return (
    <div>
      <button onClick={() => handleOptionClick('9-10')} style={{ background: selectedOption === '9-10' ? 'red' : 'transparent' }}> 9.00 น. - 10.00 น. </button>
      <button onClick={() => handleOptionClick('11-12')} style={{ background: selectedOption === '11-12' ? 'red' : 'transparent' }}> 11.00 น. - 12.00 น. </button>
      <button onClick={() => handleOptionClick('17-18')} style={{ background: selectedOption === '17-18' ? 'red' : 'transparent' }}> 17.00 น. - 18.00 น. </button>
      <button onClick={() => handleOptionClick('19-20')} style={{ background: selectedOption === '19-20' ? 'red' : 'transparent' }}> 19.00 น. - 20.00 น. </button>
    </div>
  );
}

export default TimeSelector;
