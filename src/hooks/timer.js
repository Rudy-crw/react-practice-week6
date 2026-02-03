import { useState, useEffect } from "react";
const useTimer = () => {
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // 清除註冊事件
    const clearTimer = setInterval(() => {
      setTimer(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(clearTimer);
  }, []);
  // 有什麼數值、屬性需要給其他元件使用
  return timer;
};
export default useTimer;
