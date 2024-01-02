import RigthNavBar from "../Components/Dashboard/NavBar/rigth-navbar"
import ContainerProducts from "../Components/Dashboard/Products/containerProducts"
import TopNavBar from "../Components/Dashboard/NavBar/topNavBar"
export default function HomeView(){
    return(
        <div className=" flex flex-col">
           <TopNavBar></TopNavBar>
            <ContainerProducts/>
        </div>
    )
}