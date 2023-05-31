import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function InputForm() {
    const location = useLocation();
    const { selectedDate, selectedTime, fname, lname, image, department} = location.state || {};
    
    const [patientFname, setPatientFname] = useState('');
    const [patientLname, setPatientLname] = useState('');
    const [patientIDcard, setPatientIDcard] = useState('');
    const [patientID, setPatientID] = useState('');
    const [patientSex, setPatientSex] = useState('');
    const [patientNation, setPatientNation] = useState('');
    const [patientTell, setPatientTell] = useState('');
    const [patientEmail, setPatientEmail] = useState('');
    const [patientSymptom, setPatientSymptom] = useState('');
    const [patientWeight, setPatientWeight] = useState('');
    const [patientTall, setPatientTall] = useState('');
    const [patientBloodType, setPatientBloodType] = useState('');
    const [patientPressure, setPatientPressure] = useState('');
    const [patientHR, setPatientHR] = useState('');
    const [patientTemperature, setPatientTemperature] = useState('');

  const handlePatientFname = (event) => {
    setPatientFname(event.target.value);
  };
  const handlePatientLname = (event) => {
    setPatientLname(event.target.value);
  };
  const handlePatientIDcard = (event) => {
    setPatientIDcard(event.target.value);
  };
  const handlePatientID = (event) => {
    setPatientID(event.target.value);
  };
  const handlePatientSex = (event) => {
    setPatientSex(event.target.value);
  };
  const handlePatientNation = (event) => {
    setPatientNation(event.target.value);
  };
  const handlePatientTell = (event) => {
    setPatientTell(event.target.value);
  };
  const handlePatientEmail = (event) => {
    setPatientEmail(event.target.value);
  };
  const handlePatientSymptom = (event) => {
    setPatientSymptom(event.target.value);
  };
  const handlePatientWeight = (event) => {
    setPatientWeight(event.target.value);
  };
  const handlePatientTall = (event) => {
    setPatientTall(event.target.value);
  };
  const handlePatientBloodType = (event) => {
    setPatientBloodType(event.target.value);
  };
  const handlePatientPressure = (event) => {
    setPatientPressure(event.target.value);
  };
  const handlePatientHR = (event) => {
    setPatientHR(event.target.value);
  };
  const handleTemperature = (event) => {
    setPatientTemperature(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
        <div>
            <p>{fname} {lname}</p><br/>
            <p>{image}</p><br/>
            <p>{department}</p><br/>
            <p>{selectedDate}</p><br/>
            <p>{selectedTime}</p>
        </div>
        <form onSubmit={handleSubmit}>
            <p>
                <label>
                    ชื่อ
                    <input type="text" value={patientFname} onChange={handlePatientFname} />
                </label>
                <label>
                    นามสกุล
                    <input type="text" value={patientLname} onChange={handlePatientLname} />
                </label>
            </p>
            <p>
                รหัสบัตรประชาชน, Passport
                <input type="text" value={patientIDcard} onChange={handlePatientIDcard} />
            </p>
            <p>
                เลขประจำตัวผู้ป่วย (HN)
                <input type="text" value={patientID} onChange={handlePatientID} />
            </p>
            <label>
                เลือกตัวเลือก:
                <select value={patientSex} onChange={handlePatientSex}>
                    <option value="">เพศ</option>
                    <option value="male">ชาย</option>
                    <option value="female">หญิง</option>
                </select>
            </label>
            <label>
                สัญชาติ
                <input type="text" value={patientNation} onChange={handlePatientNation} />
            </label>
            <label>
                เบอรโทร
                <input type="text" value={patientTell} onChange={handlePatientTell} />
            </label>
            <label>
                อีเมล:
                <input type="email" value={patientEmail} onChange={handlePatientEmail} />
            </label>
            <p>
                อาการและปัญหา:
                <textarea value={patientSymptom} onChange={handlePatientSymptom} />
            </p>
            <label>
            น้ำหนัก
                <input type="text" value={patientWeight} onChange={handlePatientWeight} />
            </label>
            <label>
            ส่วนสูง
                <input type="text" value={patientTall} onChange={handlePatientTall} />
            </label>
            <label>
            หมู่โลหิต
                <input type="text" value={patientBloodType} onChange={handlePatientBloodType} />
            </label>
            <label>
            ความดัน (มิลลิเมตรปรอท)
                <input type="text" value={patientPressure} onChange={handlePatientPressure} />
            </label>
            <label>
            HR (bpm) *
                <input type="text" value={patientHR} onChange={handlePatientHR} />
            </label>
            <label>
            อุณหภูมิ (เซลเซียส) *
                <input type="text" value={patientTemperature} onChange={handleTemperature} />
            </label>
            <button type="submit">ส่ง</button>
        </form>
    </div>
  );
}

export default InputForm;
