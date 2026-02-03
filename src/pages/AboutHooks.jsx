import useTimer from "../hooks/timer";
import { useMouse, useDebounce } from "react-use";
import { useRef, useState } from "react";
const AboutHooks = () => {
  // 建立一個簡單的計時器
  // const [timer, setTimer] = useState(new Date().toLocaleTimeString());

  // useEffect(() => {
  //   // 清除註冊事件
  //   const clearTimer = setInterval(() => {
  //     setTimer(new Date().toLocaleTimeString());
  //   }, 1000);

  //   return () => clearInterval(clearTimer);
  // }, []);
  const timer = useTimer();

  // useMouse
  const boxRef = useRef(null);
  const { docX, docY, posX, posY, elX, elY, elW, elH } = useMouse(boxRef);

  // useDebounce
  const [state, setState] = useState("Typing stopped"); //當前狀態
  const [val, setVal] = useState(""); // 打字的值
  const [debouncedValue, setDebouncedValue] = useState(""); //打字後，延遲寫入的值

  const [, cancel] = useDebounce(
    () => {
      //延遲會執行的函式，e.g. ajax...
      setState("延遲時觸發的程式碼 / 更新狀態");
      setDebouncedValue(val);
    },
    2000, // 延遲的時間
    [val], // 監聽值
  );

  return (
    <>
      <h2>關於 Hook</h2>
      <input
        type="text"
        value={val}
        placeholder="Debounced input"
        onChange={({ currentTarget }) => {
          setState("Waiting for typing to stop...");
          setVal(currentTarget.value);
        }}
      />
      <div>{state}</div>
      <div>
        Debounced value: {debouncedValue}
        <button onClick={cancel}>Cancel debounce</button>
      </div>
      <hr />
      <p>時間：{timer}</p>
      <hr />
      <div
        ref={boxRef}
        style={{
          height: "500px",
          border: "3px solid red",
        }}
      >
        <div>
          Mouse position in document - x:{docX} y:{docY}
        </div>
        <div>
          Mouse position in element - x:{elX} y:{elY}
        </div>
        <div>
          Element position- x:{posX} y:{posY}
        </div>
        <div>
          Element dimensions - {elW}x{elH}
        </div>
      </div>
    </>
  );
};

export default AboutHooks;
