import './NavBar.css'
import CardWidget from '../CardWidget/cardWidget'
import Logo from '../Assets/logoPrincipal.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../services'


const NavBar = () =>{

  const [categories, setCategories] = useState([])

  useEffect(() => {
    const collectionRef = collection(db, 'categories') 
    getDocs(collectionRef).then(response => {
        const categoriesAdapted = response.docs.map(doc =>{
            const data = doc.data()
            const id = doc.id
            return {id, ...data}
        })
        setCategories(categoriesAdapted)
    })
 }, [])


    return (
<div>

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <Link to='/'> <img src={Logo} alt="logo principal" className="logo" /></Link>
      <ul className="navItems">
        <li><Link to='/category/fundas' className="button-nav">Fundas</Link></li>
        <li><Link to='/category/templado' className="button-nav">Templados</Link></li>
        <li><Link to='/category/cargadores' className="button-nav">Cargadores</Link></li>
        <li><Link to='/category/equipos' className="button-nav">Equipos nuevos y reacondicionados</Link></li>
        <li><CardWidget /></li>
      </ul>
      { categories.map(cat => {
                return(
                <Link key={cat.id} to={`/category/${cat.slug}`}> {cat.label} </Link>
              )})
            } 
  </nav>
  
</div>
    )
}

export default NavBar