import { useState } from "react";
import InputMask from "react-input-mask";
import { auth } from "../firebase/config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function LoginOTP() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleVerifyPhone = () => {
    setShow(true);
  };
  const generateRecaptCha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      auth
    );
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await generateRecaptCha();
      let recaptchar = window.recaptchaVerifier;
      const vn = "+84 ";
      const _phone = phone.replaceAll("-", " ");
      // console.log(vn.concat(_phone));
      // console.log(vn.concat(_phone).trim().length);
      // const b = "+84 395 998 092";
      // console.log(b.length);
      // console.log(_phone.trim().length);
      const __phone = vn.concat(_phone).trim();

      await signInWithPhoneNumber(auth, __phone, recaptchar)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          console.log("success");
        })
        .catch((error) => {
          console.log(error);
        });
      navigate("/verifycation");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center mt-60 flex-col">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 p-20 border border-[#d5d5d5]"
      >
        <input
          type="text"
          value={name}
          placeholder="Enter your name"
          className="mb-3 border border-[#ccc] outline-none px-5 py-2 focus:border-blue-600"
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex relative border border-[#e5e5e5] px-6 py-2 focus-within:border-blue-600">
          <InputMask
            mask="999-999-999"
            value={phone}
            type="tel"
            maskChar={null}
            className=" outline-none focus:border-slate-700 ml-5 "
            onChange={(e) => setPhone(e.target.value)}
            placeholder="500-000-000"
          ></InputMask>
          <span className="absolute left-2 top-[50%] translate-y-[-50%]">
            +84
          </span>
        </div>
        <button
          type="submit"
          onClick={handleVerifyPhone}
          className={`${
            phone.length >= 8 ? "" : "opacity-30 pointer-events-none"
          } px-8 mt-5 py-2 bg-blue-600 text-[#fff] rounded-sm text-md`}
        >
          Login
        </button>
      </form>
      <div id="sign-in-button"></div>
    </div>
  );
}
export default LoginOTP;
