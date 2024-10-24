import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";



function RegisterUser (){

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    function senduser(event){
        event.preventDefault();

        console.log("Name: " + name);
        console.log("Last Name: " + lastName);
        console.log("Age: " + age);
        console.log("Country: " + country);
        console.log("City: " + city);
        console.log("Password: " + password);
        console.log("Email: " + email);

        console.log("Intentando conectar con el servidor metodo POST!");

        axios.post('http://localhost:8080/api/user',
    
        {
            name: name,
            lastName: lastName,
            age: age,
            country: country,
            city: city,
            password: password,
            mail: email
        }
    
    ).then((response) =>{
        console.log("Response: " + response);
    }).catch((error) => {
        console.log("Error: " + error)
    })
    ;

        console.log("Finaliza llamdo con el servidor metodo POST!")

    }


    return(
        <>
        <h1>Register User</h1>


        <form onSubmit={senduser}>
        
        <TextField  label="Name" variant="outlined" sx={{mb: 4}} fullWidth value={name} onChange={e => setName(e.target.value)}/>
        <TextField  label="LastName" variant="outlined" sx={{mb: 4}} fullWidth value={lastName} onChange={e => setLastName(e.target.value)}/>
        <TextField  label="Age" variant="outlined" sx={{mb: 4}} fullWidth value={age} onChange={e => setAge(e.target.value)}/>
        <TextField  label="Country" variant="outlined" sx={{mb: 4}} fullWidth value={country} onChange={e => setCountry(e.target.value)}/>
        <TextField  label="City" variant="outlined" sx={{mb: 4}} fullWidth value={city} onChange={e => setCity(e.target.value)}/>
        <TextField  label="Password" variant="outlined" sx={{mb: 4}} fullWidth type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        <TextField  label="Email" variant="outlined" sx={{mb: 4}} fullWidth type="email" value={email} onChange={e => setEmail(e.target.value)}/>

        <Button variant="contained" type="submit">Create Account</Button>
        </form>
        </>
    )
}


export default RegisterUser;