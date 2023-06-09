import CartWidget from '../CartWidget/CartWidget'
import "./navbar.css";
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to='/'>
        <h3 className="navbar__title">DefHelp</h3>
      </Link>
        <div className="navbar__category">
            <NavLink to={`/category/1`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Deportivo</NavLink>
            <NavLink to={`/category/2`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cazual</NavLink>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar
