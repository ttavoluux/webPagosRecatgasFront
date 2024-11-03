
import { Route, Routes } from "react-router-dom";
import RegisterUser from "../components/RegisterUser";
import Login from "../components/Login";
import VerificarCuenta from "../components/VerificarCuenta";
import NuevaSolicitudBeca from "../components/NuevaSolicitudBeca";



function RoutesApp () {
    return(
        <Routes>

            <Route path="/" element={<Login/>}/>
            <Route path="/createAccount" element={<RegisterUser/>}/>
            <Route path="/confirmationAccount" element={<VerificarCuenta/>}/>
            <Route path="/nuevaSolicitud" element={<NuevaSolicitudBeca/>}/>


        </Routes>
    )
}




export default RoutesApp;