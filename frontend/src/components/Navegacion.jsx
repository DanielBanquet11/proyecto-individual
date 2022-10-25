
import {NavLink} from 'react-router-dom'

const Navegacion = () => {
  return (
    <div> 
       <div>
       <NavLink to="acerca-de">
         Acerca de
       </NavLink>
       </div>
         
       <div>
       <NavLink to="contactos">
       Contactanos
       </NavLink>
       </div>

       <div>
       <NavLink to="/">
         Login
       </NavLink>
       </div>

    </div>

  )
}

export default Navegacion