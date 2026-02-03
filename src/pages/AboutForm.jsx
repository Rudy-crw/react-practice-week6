import { useState } from "react";

const AboutForm = () => {
  const [check, setCheck] = useState(true);

  const [checkList, setCheckList] = useState([]);
  const handleCheckList = (e) => {
    console.log(e.target.value);
    if (e.target.checked) {
      setCheckList([...checkList, e.target.value]);
    } else {
      // 過濾 ：把當前點選到的選項清除 (篩選出 非點到的選項，相同的會捨棄不拿)
      setCheckList(checkList.filter((item) => e.target.value !== item));
    }
  };
  return (
    <>
      <h2>表單</h2>
      <form action="https://www.google.com/" method="get">
        <input
          type="checkbox"
          onChange={(e) => {
            console.dir(e.target.checked);
            setCheck(e.target.checked);
          }}
          checked={check}
        />
        吃飽沒 {check.toString()}
        <hr />
        {JSON.stringify(checkList)}
        <br />
        <input
          type="checkbox"
          id="checkList1"
          name="like"
          value="炒麵"
          onChange={handleCheckList}
        />
        <label htmlFor="checkList1">炒麵</label>
        <input
          type="checkbox"
          id="checkList2"
          name="like"
          value="鍋燒意麵"
          onChange={handleCheckList}
        />
        <label htmlFor="checkList2">鍋燒意麵</label>
        <input
          type="checkbox"
          id="checkList3"
          name="like"
          value="炸薯條"
          onChange={handleCheckList}
        />
        <label htmlFor="checkList3">炸薯條</label>
        <br />
        <button type="button">送出</button>
      </form>
      <hr />
      <hr />
      <h3>以下補充 form 知識</h3>
      <form action="https://www.google.com/" method="get">
        <label htmlFor="title">標題</label>
        <input type="text" id="title" name="title" />
        {/* name:送給後端的資料欄位 */}
        <br />
        <input type="radio" name="性別" id="male" />{" "}
        <label htmlFor="male">男</label>
        <input type="radio" name="性別" id="female" />
        <label htmlFor="female">女</label>
        {/* 下面做法不推薦 */}
        <label>
          <input type="radio" name="性別" />
          隱藏
        </label>
        {/* 上面做法不推薦 */}
        <br />
        <button type="button">送出</button>
      </form>
    </>
  );
};

export default AboutForm;
