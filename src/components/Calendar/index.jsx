import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";



const Calendar=({value, onChange}) => {
  return (
    <div>
      <p>Выберите дату</p>
      <DatePicker selected={value} onChange={(date) => onChange(date)} className="text-black mb-2 w-full rounded-sm bg-slate-100 p-1" />
      {console.log(value)}
      
    </div>
  );
}
export default Calendar