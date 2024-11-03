import {Button, TextField} from "@mui/material";
import {useState} from "react";


function NuevaSolicitudBeca() {

    const [name,setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [school, setSchool] = useState('');
    const [scholarship, setScholarship] = useState('');

    return (
        <>
            <h1>Nueva Solicitud Beca</h1>
            <TextField label="Name" variant="standard" fullWidth={true} value={name} sx={{mb: 4}} onChange={e => setName(e.target.value)}/>
            <TextField label="LastName" variant="standard" fullWidth={true} value={lastname} sx={{mb: 4}} onChange={e => setLastname(e.target.value)}/>
            <TextField label="School" variant="standard" fullWidth={true} value={school} sx={{mb: 4}} onChange={e => setSchool(e.target.value)}/>
            <TextField label="Scholarship" variant="standard" fullWidth={true} value={scholarship} sx={{mb: 4}} onChange={e => setScholarship(e.target.value)}/>
            <Button variant="contained" type="submit">Send</Button>
        </>
    )
}

export default NuevaSolicitudBeca;