import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import RegisterUser from './components/RegisterUser';
import RoutesApp from './Routes/RoutesApp';
import { AppBar, Toolbar } from '@mui/material';

function App() {
    return (
    <div className="App">

        <AppBar position='static'><Toolbar>Luyten Services</Toolbar></AppBar>
        <RoutesApp/>
    </div>
    );
}

export default App;
