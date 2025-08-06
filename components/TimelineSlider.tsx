import { useEffect, useState } from "react";
import { Range } from "react-range";

export default function TimelineSlider() {
  const [values, setValues] = useState([50]);
  const [time, setTime] = useState(new Date().toLocaleString("en-In", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  }))
  const today = new Date().toLocaleString("en-In", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString("en-In", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, [])
  return (
    <div className="w-full grid">

      <div className="grid absolute top-5 right-5 text-right">
        <p className="">{time}</p>
        <p className="">{today}</p>
      </div>
    </div>
  )
}
