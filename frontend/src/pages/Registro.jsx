import React from 'react'
import { TextField} from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
const Registro = () => {
  return (
    <div>
      <br />
<div className="regis">
        <form className="f2">
        <PersonAddIcon sx={{ fontSize:90 }}/>
        <h1>REGISTRO</h1>
        <TextField id="outlined-basic" label="Usuario" variant="standard" /> 
                <br />
                <br />
                <TextField id="outlined-basic" label="Dirección" variant="standard" /> 
                <br />
                <br />
                <TextField id="outlined-basic" label="Telefóno" type="number" variant="standard" /> 
                <br />
                <br />
                <TextField id="outlined-basic" label="Correo" type="email" variant="standard" /> 
                 <br />
                 <br />
                 <TextField id="outlined-basic" label="Contraseña" type="password" variant="standard" /> 
                <br />
                <br />
             <button> Register</button>   
             <br/>

        </form>
    </div>
    <br />
    </div>
    
  )
}

export default Registro