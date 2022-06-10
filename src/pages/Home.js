import { signOut } from "firebase/auth";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import { auth } from "../firebase/config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { used } = useAuth();
  const navigate = useNavigate();
  console.log(used);
  const handleSignOut = async () => {
    signOut(auth);
    navigate("/login");
    toast.error("success", { position: "top-right" });
  };
  return (
    <div className="w-full max-w-[1024px] px-5 mt-10 mx-auto select-none">
      <div className="flex items-center justify-between">
        <h2 className="text-center text-3xl font-semibold">
          {used?.phoneNumber
            ? " Chào mừng bạn đã đến với trang chủ"
            : "Vui lòng đăng nhập để trải nghiệm"}
        </h2>
        {used?.phoneNumber ? (
          <button
            onClick={handleSignOut}
            className="w-full max-w-[96px] bg-red-700 text-[#fff] px-6 py-2 outline-none rounded-sm hover:opacity-75"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="px-8 py-2 bg-blue-700 text-[#fff] text-center"
          >
            Login
          </Link>
        )}
      </div>

      <div className="relative pt-[46%] mt-10">
        <img
          src="https://ecdn.game4v.com/g4v-content/uploads/2021/12/31102939/NWH-hau-truong-2-game4v-1640921378-83.jpg"
          className="w-full absolute top-0 left-0 right-0 object-cover"
          alt="https://ecdn.game4v.com/g4v-content/uploads/2021/12/31102939/NWH-hau-truong-2-game4v-1640921378-83.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
