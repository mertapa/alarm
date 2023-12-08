import React, { useEffect, useState } from "react";

const Watch = () => {
  let d = new Date();
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours() ;
  
 
  const kontrol = (x) => {
    if (x < 10) {
      x = "0" + x;
    }
    return x;
  };


  s = kontrol(s);
  m = kontrol(m);
  h = kontrol(h);

  const [value, setValue] = useState([0]);




  useEffect(() => {
    setTimeout(() => {
      setValue([
        {
          s: s,
          m: m,
          h: h,
        },
      ]);
    }, 1000);
  });
  return (
    <div className="watch2">
      <table>
        {value.map((value) => (
          <tr>
            <td>{value.h} </td>:<td>{value.m}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Watch;
