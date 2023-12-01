import React, { useEffect, useRef, useState } from "react";

const Countdown = ({ seconds, renderComponent }) => {
    const [timeLeft, setTimeLeft] = useState(seconds);
    const intervalRef = useRef();
  
    useEffect(() => {
      intervalRef.current = setInterval(() => {
        setTimeLeft((t) => t - 1);
      }, 1000);
  
      return () => clearInterval(intervalRef.current);
    }, []);
  
    useEffect(() => {
      if (timeLeft <= 0) {
        clearInterval(intervalRef.current);
        // document.getElementById("false").checked = true;
        // onNextQuestion();
      }
    }, [timeLeft, renderComponent]);
    if (timeLeft === 0) {
      return renderComponent();
    } else {
      return <div>{timeLeft}s left to answer</div>;
    }
    }

export default Countdown;