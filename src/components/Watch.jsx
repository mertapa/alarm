import React, { useEffect, useState } from "react";

const Watch = () => {
  const d = new Date();
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours();

  const kontrol=(x)=>{
   
    if(x<10){
      x= "0"+x;
    }
   return x;
  }
s= kontrol(s);
h= kontrol(h);
m= kontrol(m);
  const [value, setValue] = useState([s , m, h]);
  useEffect(() => {
    setTimeout(() => {
      setValue([
       {
        s:s,
        m:m,
        h:h,
       }
      ]);
    }, 1000);
  });
  return <div className="watch2">
    <table>
       {value.map(value=>(
      <tr>
        <td>{value.h} </td>:
        <td>{value.m} </td>:
        <td>{value.s} </td>
      </tr>
       ))}
    </table>
  </div>;
};

export default Watch;
