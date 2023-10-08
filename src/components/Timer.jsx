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
    <div className="absolute  bottom-[470px] left-[240px] font-Sniglet text-[20px] text-arrowColor  md:bottom-10 md:left-12 lg:bottom-12 lg:left-20 xl:bottom-8 xl:left-20">
      {timeString}
    </div>
  );
}

export default Timer;
