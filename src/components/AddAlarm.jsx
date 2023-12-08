import React from 'react'
import { useState } from 'react';


const AddAlarm = (setAlarms,alarms) => {
  const [alarm, setAlarm] = useState([]);
  const [inputText, setInputText] = useState([]);

const inputTimeHandler = (e) =>{
  setAlarm(e.target.value);
}
const inputTextHandler = (e) => {
  setInputText(e.target.value);
};
const submitTohandle = (e) =>{
  e.preventDefault();
  setAlarms([
    {
      text:inputText,
      state:true,
      time:alarm
    }
  ]);
}

  return (
    <div className='addAlarm'>
      <form className='alarmForm'>
        <input value={alarm} onChange={inputTimeHandler} className='inputColor form-control' type="time" />
        <input type="text"  className='inputColor form-control mt-3' value={inputText} onChange={inputTextHandler} />
        <button className='form-control inputColor mt-3' onClick={submitTohandle}>Set Alarm</button>
      </form>
    </div>
  )
}

export default AddAlarm
