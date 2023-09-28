import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const timeString = new Date(secondsRemaining * 1000).toLocaleTimeString([], {
    minute: "2-digit",
    second: "2-digit",
  });
  useEffect(function () {
    const id = setInterval(function () {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="absolute bottom-10 left-20 font-Sniglet text-[20px] text-arrowColor">
      {timeString}
    </div>
  );
}

export default Timer;
