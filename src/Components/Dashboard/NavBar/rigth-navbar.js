import { Card, Autocomplete } from "@mui/material";
import ButtonNavBar from "./buttonNavBar";
import { AiFillBug, AiFillHeart, AiFillStar, AiFillTool, AiFillApple } from "react-icons/ai";
import ProfileUserMiniData from "./profileUserMiniData";
import SignOut from "./signOut";
const buttonData = [
  { title: "Analisis", icon: AiFillBug, destinationUrl: "/url1" },
  { title: "Productos", icon: AiFillHeart, destinationUrl: "/url2" },
  { title: "Lotes", icon: AiFillStar, destinationUrl: "/url3" },
  { title: "Inventario", icon: AiFillStar, destinationUrl: "/url3" },
  { title: "Sin nombre", icon: AiFillApple, destinationUrl: "/url1" },
  { title: "Sin nombre", icon: AiFillApple, destinationUrl: "/url2" },
  { title: "Sin nombre", icon: AiFillApple, destinationUrl: "/url3" },
  { title: "Sin nombre", icon: AiFillApple, destinationUrl: "/url3" },
  { title: "Sin nombre", icon: AiFillApple, destinationUrl: "/url1" },
  { title: "Sin nombre", icon: AiFillApple, destinationUrl: "/url2" },



];


export default function RigthNavBar() {
  return (
    <div className="w-[250px] h-[100vh] flex flex-col items-center justify-between bg-slate-800">
      <div>
        <ProfileUserMiniData />
      </div>
      <div className="flex flex-col gap-[10px]">
        {buttonData.map((button, index) => (
          <ButtonNavBar
            key={index}
            title={button.title}
            icon={button.icon}
            destinationUrl={button.destinationUrl}
          />
        ))}
      </div>
      <div className="mb-5">
        <SignOut />
      </div>
    </div>
  );
}



