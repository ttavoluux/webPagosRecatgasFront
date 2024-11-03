import axios from "axios";
import Login from "./Login";
import { Button, TextField } from "@mui/material";
import { useState } from "react";



function confirmationAccount (){

    const [name, setCodigo] = useState('');


    function confirmation(){
        axios.post("http://localhost:8080/api/user/activation", {codigo:codigo}).then((response) =>{
            console.log("Response: " + response);
        }).catch((error) => {
            console.log("Error: " + error)
        })
        ;
    
            console.log("Finaliza llamdo con el servidor metodo POST!")
    
        }
    
    return(
        <>
        <h1>Confima tu Cuenta!</h1>

        <form onSubmit={confirmationAccount}>

        <TextField  label="Codigo" variant="outlined" sx={{mb: 4}} fullWidth value={codigo} onChange={e => setCodigo(e.target.value)}/>
         <a href={Login}><Button variant="contained" type="submit">Confirmation Account</Button></a>
        </form>
        </>
    )
}

export default confirmationAccount;