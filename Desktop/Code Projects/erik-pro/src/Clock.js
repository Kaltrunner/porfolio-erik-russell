import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

    let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];


  const formattedTime = () => {
    let month = months[time.getMonth()];
    let d = time.getDate();
    let h = time.getHours();
    let m = time.getMinutes();
    // let s = time.getSeconds();
    m = checkTime(m);
    // s = checkTime(s);
    return month + " " + d + " - " +  h + ":" + m ;
  }

  const checkTime = (i) => {
    if (i < 10) { i = "0" + i };
    return i;
  }

  return <div id="txt">{formattedTime()}</div>;
}

// import { useState, useEffect } from "react";

// function Clock() {
//   const [date, setDate] = useState(new Date());

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDate(new Date());
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];

//   const month = months[date.getMonth()];
//   // const day = day.getDay().toString().padStart(2, "0");
//   const hour = date.getHours().toString().padStart(2, "0");
//   const minute = date.getMinutes().toString().padStart(2, "0");
//   const second = date.getSeconds().toString().padStart(2, "0");

//   return (
//     <div className="clock" id="txt">
//       <div className="month">{month}
//       </div>
//       {/* <span className="day">{day}</span> */}
//       <div className="time">
//         <span className="hour">{hour}</span>
//         <span>:</span>
//         <span className="minute">{minute}</span>
//         <span>:</span>
//         <span className="second">{second}</span>
//       </div>
//     </div>
//   );
// }

export default Clock;