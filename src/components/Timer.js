import React, {useEffect, useState} from 'react';
import { useTimer } from 'react-timer-hook';
import { useSelector, useDispatch } from 'react-redux'

export default function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    timer,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });

  localStorage.setItem('seconds', seconds);
  localStorage.setItem('minutes', minutes);
  localStorage.setItem('hours', hours);
  localStorage.setItem('days', days);
  localStorage.setItem('isRunning', isRunning);
  // localStorage.setItem('timerinp', 90);
  // timer = localStorage.getItem('timerinp');
  // console.log(localStorage.getItem(localStorage.getItem('timerinp')));
  console.log(90);
  const [timerinp, settimerinp] = useState(localStorage.getItem('timerinp'));
  // settimerinp(90);

  

  //timerinp = localStorage.getItem('timerinp');

  
  //settimerinp(timerinp);
  const sec = useSelector((state) => state.clock.seconds);
  console.log("sec" + sec);

  //console.log(timerinp);
  //const bc = BroadcastChannel('timer');
  //bc.postMessage({ seconds, minutes, hours, days, isRunning });
  // const [timerinp, settimerinp] = useState(90);
  let timerinpp = timerinp;

  return (
    <div style={{textAlign: 'center'}}>
      
      <div style={{fontSize: '100px'}}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={resume}>Resume</button>
      <button onClick={() => {
        // Restarts to 5 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + sec);
        restart(time)
      }}>Restart</button>
    </div>
  );
}

// export default function App() {
//   const time = new Date();
//   time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
//   return (
//     <div>
//       <Timer expiryTimestamp={time} />
//     </div>
//   );
// }