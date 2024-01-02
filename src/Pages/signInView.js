import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SingInView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('tocado')
    navigate("/home");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div
        style={{
          backgroundImage:
            "url('https://png.pngtree.com/background/20220720/original/pngtree-wind-lined-warehouse-picture-image_1684636.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="h-[100vh] w-[100%] flex justify-center items-center"
      >
        <div className="flex flex-col justify-center rounded-lg border-2 backdrop-blur-sm w-[300px]">
          <div className="flex flex-col items-center gap-[10px] ">
            <p className="text-[25px] font-bold text-white my-[15px]">
              Inventory Smart
            </p>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="focus:outline-none rounded-full bg-transparent border-2 border-stone-50 text-[12px] p-[6px] text-white px-[28px]"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="focus:outline-none rounded-full bg-transparent border-2 border-stone-50 text-[12px] p-[6px] px-[28px] text-white"
            />
            <div className="flex flex-row justify-between items-start gap-[59px]">
              <div className="flex flex-row items-center">
                <input
                  type="checkbox"
                  className="mr-[5px]"
                  id="rememberMe"
                />
                <label htmlFor="rememberMe" className="text-[9px] text-white">
                  Remember me
                </label>
              </div>
              <p className="text-[9px] text-white">Forgot Password</p>
            </div>
            <button
              type="submit"
              className="bg-white text-black text-[12px] font-bold rounded-full p-[6px] px-[78px]"
            >
              Ingresar
            </button>
          </div>
          <div className="flex justify-center my-[12px]">
            <p className="text-[9px] text-white">Don't have an account?</p>
            <p className="text-[9px] text-white font-bold"> Register</p>
          </div>
        </div>
      </div>
    </form>
  );
}
