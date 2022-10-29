import React from 'react'
import { TextField} from '@mui/material'
import HttpsIcon from '@mui/icons-material/Https';
const OlvideClave = () => {
  return (
    <div>
      <br />
<div className="pass"> 
        <form className="f3">
        <HttpsIcon sx={{ fontSize:90 }}/>
        <h1>Recuperar Contraseña</h1>
        <TextField id="outlined-basic" label="Correo" type="email" variant="standard" />
         <br />
         <br/>
         <button> ENVIAR</button>
         <br/>
        </form>
  
    </div>
    <br/>
    </div>
  )
}

export default OlvideClave