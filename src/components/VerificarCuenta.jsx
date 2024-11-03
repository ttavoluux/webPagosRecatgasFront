import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Login from "./Login";
import axios from "axios";



function VerificarCuenta (){

    const [codigo, setCodigo] = useState('');

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
        <h1>Verificar Cuenta</h1>

        <form onSubmit={confirmation}>

        <TextField  label="Codigo" variant="outlined" sx={{mb: 4}} fullWidth value={codigo} onChange={e => setCodigo(e.target.value)}/>
         <Button variant="contained" type="submit">Verify Account</Button>
        </form>
        </>
    )
}

export default VerificarCuenta;