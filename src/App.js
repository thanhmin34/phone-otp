import { useCallback, useEffect, useState } from "react";
import InputMask from "react-input-mask";
function PhoneInput(props) {
  return (
    <InputMask
      mask="999-999-9999-99999999"
      value={props.value}
      type="tel"
      maskChar={null}
      className="border border-[#e5e5e5] px-6 py-2 outline-none focus:border-slate-700 "
      onChange={props.onChange}
      placeholder="500-000-000"
      // alwaysShowMask={true}
    ></InputMask>
  );
}
function App() {
  const [phone, setPhone] = useState("");
  const number = "35";
  useEffect(() => {
    let result = +phone.replaceAll("-", "");
    console.log(+(number + result));
  }, [phone]);
  const handleInput = ({ target: { value } }) => setPhone(value);
  return (
    <div className="flex items-center justify-center mt-16 flex-col">
      <PhoneInput value={phone} onChange={handleInput}></PhoneInput>
      <div style={{ paddingTop: "12px" }}>Phone: {phone}</div>
    </div>
  );
}
export default App;
