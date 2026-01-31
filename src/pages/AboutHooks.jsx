import { useEffect } from "react";
import { useState } from "react";

const AboutHooks = () => {
  const [timer, setTimer] = useState(new Date().toLocaleTimeString);
  useEffect(() => {
    const clearTimer = setInterval(() => {
      setTimer(new Date().toLocaleTimeString());
      console.log(111);
    }, 1000);
    return () => clearInterval(clearTimer);
  }, []);

  return (
    <>
      <h2>關於 Hook</h2>
      <p>時間：{timer}</p>
    </>
  );
};

export default AboutHooks;
