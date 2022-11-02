import './NavBar.css'
import CardWidget from '../CardWidget/cardWidget'
import Logo from '../Assets/logoPrincipal.png'
import { NavLink, Link } from 'react-router-dom'
import {getDocs, collection, orderBy, query} from "firebase/firestore"


const NavBar = () =>{
    return (
<div>

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to='/'> <img src={Logo} alt="logo principal" class="logo" /> </Link>
      <ul class="navItems">
        <li><Link to='/category/fundas' className="button-nav">Fundas</Link></li>
        <li><Link to='/category/templado' className="button-nav">Templados</Link></li>
        <li><Link to='/category/cargadores' className="button-nav">Cargadores</Link></li>
        <li><Link to='/category/equipos' className="button-nav">Equipos nuevos y reacondicionados</Link></li>
        <li><CardWidget /></li>
      </ul>
  </nav>
  
</div>
    )
}

export default NavBar