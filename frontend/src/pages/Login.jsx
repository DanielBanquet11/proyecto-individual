import {NavLink} from 'react-router-dom'
// import { TextField} from '@mui/material'
const Login = () => {
  return (
    <div>

      Login
      <div>
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}

         <input type="text" placeholder="Tu usuario" />
         <input type="password" placeholder="Tu clave" />

         <button>
          Ingresar
         </button>

      </div>

       <div>
       <NavLink to="/registro">
         si no tienes cuenta, registrate
       </NavLink>
       </div>

       <div>
       <NavLink to="/olvide-clave">
         olvide clave
       </NavLink>
       </div>

    </div>
  )
}

export default Login