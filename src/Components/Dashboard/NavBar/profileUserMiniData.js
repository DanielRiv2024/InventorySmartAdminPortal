import React from "react";
import { Avatar } from "@mui/material";

export default function ProfileUserMiniData() {
  return (
    <div className="flex flex-col justify-center items-center  p-5">
      <img   className="h-[80px] w-[80px] rounded-full" src="https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg" alt="Descripción de la imagen" />
      <p className="font-bold text-white text-[20px]">Name</p>
      <p className="font-bold text-white text-[14px]">UserName@gmail.com</p>
    </div>
  );
}


