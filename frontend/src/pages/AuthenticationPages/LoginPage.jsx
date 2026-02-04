import React from "react";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div className=" w-full px-3 lg:py-5 py-20">
      <div className="flex  flex-col gap-10 items-center lg:px-20 lg:flex-row lg:justify-center lg:items-center md:flex-col md:justify-center md:items-center">
        <div className="w-fit ">
          <h1 className="text-2xl text-center md:text-center  text-[#3577b5] md:m-3 font-bold">
            Convo<span className="text-4xl text-[#c24545]">Room</span>
          </h1>
          
          <div className="hidden w-full  lg:flex items-center justify-center">
            <img
              className="w-[30em] h-fit"
              src="../../src/assets/ConvoRoom_logo.png"
              alt=""
            />
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
