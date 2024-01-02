import { useNavigate } from "react-router-dom"

export default function SignOut(){
const navigate = useNavigate()
    return(
        <div onClick={ ()=> navigate('/login')}
        className="flex bg-zinc-300 h-[40px] w-[200px] bg-red-600  items-center justify-center rounded-lg cursor-pointer">
         <p className="text-[15px] text-white font-bold">Cerrar Sesion</p>
        </div>
    )
}