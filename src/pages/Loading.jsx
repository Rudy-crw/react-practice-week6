import { useState } from "react";

const promiseSetTimeout = (status) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (status) {
        resolve("promiseSetTimeout 成功");
      } else {
        reject("promiseSetTimeout 失敗");
      }
    }, 1000);
  });
};

const Loading = () => {
  // 基本版
  const [loading, setLoading] = useState();
  //進階版
  const list = [
    { id: 1, name: "apple" },
    { id: 2, name: "banana" },
    { id: 3, name: "cherry" },
  ];

  const [listLoadingState, setListLoadingState] = useState([]);

  return (
    <>
      <h2>基本版</h2>
      <button
        className="btn btn-outline-primary"
        type="button"
        onClick={() => {
          setLoading(true);
          (async function () {
            try {
              await promiseSetTimeout(false);
            } catch (error) {
              console.log(error);
            } finally {
              setLoading(false);
            }
          })();
        }}
        disabled={loading}
      >
        執行按鈕
        {loading && (
          <span
            className="spinner-border spinner-border-sm"
            aria-hidden="true"
          ></span>
        )}
      </button>
      <hr />
      <h2>進階版</h2>
      {JSON.stringify(listLoadingState)}
      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              {" "}
              {item.name}
              <button
                type="button"
                onClick={() => {
                  setListLoadingState([...listLoadingState, item.id]);
                  (async () => {
                    try {
                      await promiseSetTimeout(true);
                    } catch (error) {
                      console.log(error);
                    } finally {
                      setListLoadingState((prev) => {
                        console.log(prev);
                        return prev.filter((i) => i !== item.id);
                      });
                    }
                  })();
                }}
                disabled={listLoadingState.includes(item.id)}
                // 簡單的做法就是當按下按鈕跑時，所有的 btn 都讓他出現 loading
                // disabled={loading}
              >
                按我
                {loading && (
                  <span
                    className="spinner-border spinner-border-sm"
                    aria-hidden="true"
                  ></span>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Loading;
