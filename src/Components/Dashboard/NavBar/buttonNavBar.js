import React from "react";
import { AiFillBug } from "react-icons/ai";

export default function ButtonNavBar({ title, icon, destinationUrl }) {
  const handleClick = () => {
    // Simplemente imprime la URL del destino cuando se hace clic
    console.log(`Navigate to: ${destinationUrl}`);
    // Puedes realizar otras acciones aquí según tus necesidades
  };

  return (
    <div>
      <div
        className="flex bg-zinc-300 h-[40px] w-[200px] bg-blue-300 justify-center rounded-lg cursor-pointer"
        style={{ background: "rgba(255, 255, 255, 0.2)" }} // Ajusta la opacidad aquí
        onClick={handleClick}
      >
        <div className="flex items-center  w-[150px] gap-[20px] justify-start">
        {icon && React.createElement(icon, { color: "white" })}
        <p className="text-[15px] text-white font-bold">{title}</p>
        </div>
       
      </div>
    </div>
  );
}
