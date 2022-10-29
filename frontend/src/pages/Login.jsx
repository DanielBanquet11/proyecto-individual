import {NavLink} from 'react-router-dom'
import { TextField} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const Login = () => {
  return (
    <div>
      <br />
      <div className="login">
      
      <form className=" f1" >
      <AccountCircleIcon sx={{ fontSize:90 }}/>
            <h1>INICIO DE SESION</h1>
            <TextField id="outlined-basic" label="Usuario" variant="standard" /> 
              <br />
              <br />
              <TextField id="outlined-basic" label="Contraseña" type="password" variant="standard" /> 

           <br />
           <br />
        <button> INICIAR</button>
        <br />
        <br />
       <button>
       <NavLink to="/registro">
       <PersonAddIcon sx={{ fontSize:20 }}/>
       </NavLink></button>
       
       &nbsp;&nbsp;&nbsp;&nbsp;
       <button>
       <NavLink to="/olvide-clave">
       <HttpsIcon sx={{ fontSize:20 }}/>
       </NavLink></button>
       
       
        </form>
         
      </div>

       
    </div>
  )
}

export default Login