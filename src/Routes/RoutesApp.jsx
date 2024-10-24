
import { Route, Routes } from "react-router-dom";
import RegisterUser from "../components/RegisterUser";
import Login from "../components/Login";



function RoutesApp () {
    return(
        <Routes>

            <Route path="/" element={<Login/>}/>
            <Route path="/createAccount" element={<RegisterUser/>}/>


        </Routes>
    )
}




export default RoutesApp;