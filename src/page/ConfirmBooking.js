import React from 'react';
import { useLocation, useNavigate} from 'react-router-dom';

function ConfirmBooking() {
    const location = useLocation();
    const { image,
        fname,
        lname,
        department,
        selectedDate,
        selectedTime,
        patientFname,
        patientLname,
        patientIDcard,
        patientID,
        patientSex,
        patientNation,
        patientTell,
        patientEmail,
        patientSymptom,
        patientWeight,
        patientTall,
        patientBloodType,
        patientPressure,
        patientHR,
        patientTemperature
    } = location.state || {};
    
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleBack = () => {
    navigate('/inputbooking');
  };

  return (
    <div className='pt-20'>
      <div className="border-l-8 border-orange-600 pl-1.5 mb-9 ml-40 ">
        <h1 className="font-roboto font-semibold text-4xl">ตรวจสอบข้อมูลการนัดหมายแพทย์</h1>
      </div>

      <form className='flex flex-col items-center' onSubmit={handleSubmit}>
        <div className="w-3/5 flex bg-white shadow-2xl rounded-xl overflow-hidden">
          <img className="h-full w-52" src={image} alt="doctorImage" />
          <div className="w-full bg-white py-5 px-5">
            <div className="mb-5">
              <p className="font-roboto font-bold text-xl text-gray-700 mb-1">{fname} {lname}</p>
              <p className="font-roboto text-lg text-gray-700">Department :</p>
              <p className="font-roboto font-bold text-lg text-gray-700">{department}</p>
            </div>
            <div className='mb-4'>
              <div className='border-l-4 border-orange-600 pl-1.5 '>
                <p className="font-roboto font-bold text-xl text-gray-700 mb-3.5">เลือกวันที่</p>
              </div>
              <p>{selectedDate}</p>
            </div>
            <div className='mb-4'>
              <div className='border-l-4 border-orange-600 pl-1.5 '>
                <p className="font-roboto font-bold text-xl text-gray-700 mb-3.5">เลือกเวลา</p>
              </div>
              <p>{selectedTime}</p>
            </div>
          </div>
        </div>

        <div className='w-3/5 flex bg-white shadow-2xl rounded-xl overflow-hidden mt-11 flex-col p-8 '>
          <p className='font-roboto font-normal font-bold text-3xl'>ข้อมูลผู้ป่วย</p>
          <div className='px-24 mt-6'>
            <div className='flex flex-col items-center '>
              <div className='flex w-full justify-between pb-2'>
                <div className='w-full mr-2.5'>
                  <p>
                    <label className='font-notosansthai font-normal font-bold text-sm text-gray-400 ml-3.5'>ชื่อ </label>
                    <label className='font-notosansthai font-normal font-bold text-sm text-red-600'>*</label>
                  </p>
                  <input className="border border-gray-400 rounded-lg h-9 p-2.5 focus:outline-none w-full" type="text" value={patientFname} readOnly/>
                </div>

                <div className='w-full ml-2.5'>
                  <p>
                    <label className='font-notosansthai font-normal font-bold text-sm text-gray-400 ml-3.5'>นามสกุล</label>
                    <label className='font-notosansthai font-normal font-bold text-sm text-red-600'>*</label>
                  </p>
                  <input className="border border-gray-400 rounded-lg h-9 p-2.5 focus:outline-none w-full" type="text" value={patientLname} readOnly/>
                </div>
              </div>

              <div className='flex w-full justify-between pb-2'>
                <div className='w-full'>
                  <p>
                    <label className='font-notosansthai font-normal font-bold text-sm text-gray-400 ml-3.5'>รหัสบัตรประชาชน, Passport</label>
                    <label className='font-notosansthai font-normal font-bold text-sm text-red-600'>*</label>
                  </p>
                  <input className="border border-gray-400 rounded-lg h-9 p-2.5 focus:outline-none w-full" type="number" value={patientIDcard} readOnly/>
                </div>
              </div>

              <div className='flex w-full justify-between pb-2'>
                <div className='w-full'>
                  <p>
                    <label className='font-notosansthai font-normal font-bold text-sm text-gray-400 ml-3.5'>เลขประจำตัวผู้ป่วย (HN)</label>
                    <label className='font-notosansthai font-normal font-bold text-sm text-red-600'>*</label>
                  </p>
                  <input className="border border-gray-400 rounded-lg h-9 p-2.5 focus:outline-none w-full" type="number" value={patientID} readOnly/>
                </div>
              </div>

              <div className='flex w-full justify-between pb-2'>
                <div className='w-full mr-2.5'>
                  <p>
                    <label className='font-notosansthai font-normal font-bold text-sm text-gray-400 ml-3.5'>เพศ</label>
                    <label className='font-notosansthai font-normal font-bold text-sm text-red-600'>*</label>
                  </p>
                  <select className="border border-gray-400 rounded-lg h-9 focus:outline-none w-full" value={patientSex} readOnly>
                        <option value="">เพศ</option>
                        <option value="male">ชาย</option>
                        <option value="female">หญิง</option>
                    </select>
                </div>

                <div className='w-full ml-2.5'>
                  <p>
                    <label className='font-notosansthai font-normal font-bold text-sm text-gray-400 ml-3.5'>สัญชาติ</label>
                    <label className='font-notosansthai font-normal font-bold text-sm text-red-600'>*</label>
                  </p>
                  <input className="border border-gray-400 rounded-lg h-9 p-2.5 focus:outline-none w-full" type="text" value={patientNation} readOnly/>
                </div>
              </div>
              
              <div className='flex w-full justify-between pb-2'>
                <div className='w-full mr-2.5'>
                  <p>
                    <label className='font-notosansthai font-normal font-bold text-sm text-gray-400 ml-3.5'>เบอรโทร</label>
                    <label className='font-notosansthai font-normal font-bold text-sm text-red-600'>*</label>
                  </p>
                  <input className="border border-gray-400 rounded-lg h-9 p-2.5 focus:outline-none w-full" type="tel" value={patientTell} readOnly/>
                </div>

                <div className='w-full ml-2.5'>
                  <p>
                    <label className='font-notosansthai font-normal font-bold text-sm text-gray-400 ml-3.5'>อีเมล</label>
                    <label className='font-notosansthai font-normal font-bold text-sm text-red-600'>*</label>
                  </p>
                  <input className="border border-gray-400 rounded-lg h-9 p-2.5 focus:outline-none w-full" type="email" value={patientEmail} readOnly/>
                </div>
              </div>

              <div className='flex w-full justify-between pb-2'>
                <div className='w-full'>
                  <p>
                    <label className='font-notosansthai font-normal font-bold text-sm text-gray-400 ml-3.5'>อาการและปัญหา</label>
                    <label className='font-notosansthai font-normal font-bold text-sm text-red-600'>*</label>
                  </p>
                  <textarea className="border border-gray-400 rounded-lg p-2.5 focus:outline-none w-full" value={patientSymptom} readOnly/>
                </div>
              </div>

              <div className='flex w-full justify-between pb-2'>
                <div className='w-full mr-2.5'>
                  <p>
                    <label className='font-notosansthai font-normal font-bold text-sm text-gray-400 ml-3.5'>น้ำหนัก</label>
                    <label className='font-notosansthai font-normal font-bold text-sm text-red-600'>*</label>
                  </p>
                  <input className="border border-gray-400 rounded-lg h-9 p-2.5 focus:outline-none w-full" type="number" step="0.01" value={patientWeight} readOnly/>
                </div>

                <div className='w-full ml-2.5'>
                  <p>
                    <label className='font-notosansthai font-normal font-bold text-sm text-gray-400 ml-3.5'>ส่วนสูง</label>
                    <label className='font-notosansthai font-normal font-bold text-sm text-red-600'>*</label>
                  </p>
                  <input className="border border-gray-400 rounded-lg h-9 p-2.5 focus:outline-none w-full" type="number" step="0.01" value={patientTall} readOnly/>
                </div>
              </div>

              <div className='flex w-full justify-between pb-2'>
                <div className='w-full mr-2.5'>
                  <p>
                    <label className='font-notosansthai font-normal font-bold text-sm text-gray-400 ml-3.5'>หมู่โลหิต</label>
                    <label className='font-notosansthai font-normal font-bold text-sm text-red-600'>*</label>
                  </p>
                  <input className="border border-gray-400 rounded-lg h-9 p-2.5 focus:outline-none w-full" type="text" value={patientBloodType} readOnly/>
                </div>

                <div className='w-full ml-2.5'>
                  <p>
                    <label className='font-notosansthai font-normal font-bold text-sm text-gray-400 ml-3.5'>ความดัน (มิลลิเมตรปรอท)</label>
                    <label className='font-notosansthai font-normal font-bold text-sm text-red-600'>*</label>
                  </p>
                  <input className="border border-gray-400 rounded-lg h-9 p-2.5 focus:outline-none w-full" type="number" step="0.01" value={patientPressure} readOnly/>
                </div>
              </div>

              <div className='flex w-full justify-between pb-2'>
                <div className='w-full mr-2.5'>
                  <p>
                    <label className='font-notosansthai font-normal font-bold text-sm text-gray-400 ml-3.5'>HR (bpm)</label>
                    <label className='font-notosansthai font-normal font-bold text-sm text-red-600'>*</label>
                  </p>
                  <input className="border border-gray-400 rounded-lg h-9 p-2.5 focus:outline-none w-full" type="number" value={patientHR} readOnly/>
                </div>

                <div className='w-full ml-2.5'>
                  <p>
                    <label className='font-notosansthai font-normal font-bold text-sm text-gray-400 ml-3.5'>อุณหภูมิ (เซลเซียส)</label>
                    <label className='font-notosansthai font-normal font-bold text-sm text-red-600'>*</label>
                  </p>
                  <input className="border border-gray-400 rounded-lg h-9 p-2.5 focus:outline-none w-full" type="number" step="0.01" value={patientTemperature} readOnly/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex justify-around w-full m-11'>
          <button className="w-32 h-11 font-roboto font-bold text-base py-1.5 rounded-lg text-white bg-orange-600" onClick={handleBack}>ย้อนกลับ</button>
          <button className="w-32 h-11 font-roboto font-bold text-base py-1.5 rounded-lg text-white bg-orange-600" type="submit">ถัดไป</button>
        </div>
      </form>
        
    </div>
  );
}

export default ConfirmBooking;
