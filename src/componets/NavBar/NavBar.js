import './NavBar.css'
import CardWidget from '../CardWidget/cardWidget'
import Logo from '../Assets/logoPrincipal.png'

const NavBar = () =>{
    return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={Logo} alt="logo principal" class="logo" />
      <ul class="navItems">
        <li>Fundas</li>
        <li>Templados</li>
        <li>Cargadores y Cables</li>
        <li>Auriculares y Parlantes</li>
        <li>Contacto</li>
        <li><CardWidget /></li>
      </ul>
  </nav>
    )
}

export default NavBar