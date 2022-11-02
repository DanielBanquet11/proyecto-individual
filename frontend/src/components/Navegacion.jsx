
import {NavLink} from 'react-router-dom'
import { Link } from 'react-router-dom'
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HomeIcon from '@mui/icons-material/Home';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';


const Navegacion = () => {
  return (
    <div> 
         {/* <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div><Link to="/"> <HomeIcon sx={{ fontSize:20 }}/>  Inicio</Link></div>&nbsp;&nbsp;&nbsp;&nbsp;
          <div><Link to="contactos"> <ContactMailIcon sx={{ fontSize:20 }}/> Contáctanos</Link></div>&nbsp;&nbsp;&nbsp;&nbsp;
          <div><Link to="acerca-de"> <PersonSearchIcon sx={{ fontSize:20 }}/> Acerca de</Link> </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          </div>
        </div>
      </nav> */}
      <div id='navegacion'>
      <button id='btnav'> <Link id='xd' to="/"> <HomeIcon sx={{ fontSize:20 }}/>  Inicio</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button id='btnav'><Link id='xd'  to="contactos"> <ContactMailIcon sx={{ fontSize:20 }}/> Contáctanos</Link></button>&nbsp;&nbsp;&nbsp;&nbsp;
      <button id='btnav'><Link id='xd'  to="acerca-de"> <PersonSearchIcon sx={{ fontSize:20 }}/> Acerca de</Link> </button>
      </div>
       
       

    </div>

  )
}

export default Navegacion