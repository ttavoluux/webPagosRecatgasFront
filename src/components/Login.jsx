import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";



function Login(){
    return (
        <>

        <form>
        <h1>Login</h1>

        <TextField  label="UserName or Email" variant="outlined" sx={{mb: 4}} fullWidth/>
        <TextField  label="Password" variant="outlined" type="password"sx={{mb: 4}} fullWidth/>
        <Button variant="contained" type="submit">Login</Button>

        </form>
        <small>Create Account <Link to="/createAccount">Here</Link></small>
        </>
        //Hello github
    )
}


export default Login;
