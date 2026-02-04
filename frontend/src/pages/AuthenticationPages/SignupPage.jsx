import React from "react";
import SignupForm from "./SignupForm";
import FormError from "../../components/FormError";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const SignupPage = () => {

  const [errorMessage, setErrorMessage] = useState(null);

  return (
    <div className=" w-full min-h-screen lg:px-10  px-3 py-2"
    
 
    >
      <div className="flex flex-col gap-10 items-center  lg:flex-row lg:justify-between md:flex-col md:justify-center md:items-center">
        <div className="w-full ">
           <h1 className=" mt-10 lg:mt-2 lg:text-2xl text-center text-5xl md:text-center lg:text-left text-[#3577b5] md:m-3 font-bold">Convo<span className="text-6xl lg:text-4xl  text-[#c24545]">Room</span></h1>
           <div className="hidden w-full  lg:flex items-center justify-center">
            <img className="w-[40em] h-fit" src="../../src/assets/ConvoRoom_logo.png" alt="" />
           </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default SignupPage;
