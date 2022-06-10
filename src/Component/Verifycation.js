import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const Verifycation = () => {
  const navigate = useNavigate();
  const [verify, setVerify] = useState("");
  const VerifyCation = (e) => {
    e.preventDefault();
    const confirmationResult = window.confirmationResult;
    confirmationResult
      .confirm(verify)
      .then((result) => {
        const user = result.user;
        console.log("Success");
        console.log(user);
        toast.success("login successfully", { position: "top-right" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex items-center flex-col gap-5 p-20 border border-[#d5d5d5] relative w-full max-w-[480px] mx-auto mt-32">
        <Link to="/login" className="absolute top-3 left-4 cursor-pointer p-2">
          X
        </Link>
        <h2>Verification Code</h2>
        <form action="">
          <input
            type="tel"
            value={verify}
            onChange={(e) => setVerify(e.target.value)}
            className="w-full max-w-[140px] h-10 border border-[#e5e5e5] flex items-center justify-center px-2"
          />
          <button
            type="submit"
            onClick={VerifyCation}
            className="px-8 mt-10 py-2 bg-blue-600 text-[#fff] rounded-sm"
          >
            Verifycation
          </button>
        </form>
      </div>
    </>
  );
};

export default Verifycation;
