import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
const HookForm = () => {
  const {
    register, //用來註冊表單元素
    handleSubmit, //用來處理表單提交，當表單驗證成功才會執行
    control, //對應表單
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      favoriteFoods: "虱目魚",
      checkList: [],
    },
    mode: "onChange",
  }); // 設定運作方式

  const onSubmit1 = (data) => {
    //Ajax, 其他送出表單行為
    console.log("表單送出", data);
  };

  const watchForm = useWatch({
    control,
  });
  useEffect(() => {
    // console.log(watchForm);
  }, [watchForm]);
  console.log("errors: ", errors);
  return (
    <>
      <h2>HookForm</h2>
      <form onSubmit={handleSubmit(onSubmit1)}>
        {/* register('該欄位名稱',{其他參數}) */}
        <input
          type="text"
          {...register("username", { required: "這個欄位是必填！" })}
        />
        {errors.username ? errors.username.message : ""}
        <hr />
        <input
          type="text"
          style={{ border: errors.favoriteFoods && "1px solid red" }}
          {...register("favoriteFoods", { required: "這個欄位是必填！" })}
        />
        {errors.favoriteFoods && errors.favoriteFoods.message}
        <hr />
        <select name="" id="" {...register("city")}>
          <option value="台北">台北</option>
          <option value="台中">台中</option>
          <option value="高雄">高雄</option>
        </select>
        <hr />
        <input
          type="checkbox"
          id="checkList1"
          name="like"
          value="炒麵"
          {...register("checkList")}
        />
        <label htmlFor="checkList1">炒麵</label>
        <input
          type="checkbox"
          id="checkList2"
          name="like"
          value="鍋燒意麵"
          {...register("checkList")}
        />
        <label htmlFor="checkList2">鍋燒意麵</label>
        <input
          type="checkbox"
          id="checkList3"
          name="like"
          value="炸薯條"
          {...register("checkList")}
        />
        <label htmlFor="checkList3">炸薯條</label>
        <hr />
        <input type="checkbox" {...register("check")} />
        吃飽沒
        <hr />
        <input type="radio" {...register("gender")} value="男" />男
        <input type="radio" {...register("gender")} value="女" />女
        <hr />
        <button type="submit">送出</button>
      </form>
    </>
  );
};

export default HookForm;
