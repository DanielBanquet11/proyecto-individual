import {Outlet} from 'react-router-dom';

import Header from '../components/Header';
import Navegacion from '../components/Navegacion';
import Footer from '../components/Footer';



const Layout = () => {
  return (
    <>
       <Header/>
       <Navegacion/>
       {/* contenido central  */}
       <div className='main'>
           <Outlet/>
       </div>
       {/* fin contenido central */}
        <Footer/>
    </>
  )
}

export default Layout