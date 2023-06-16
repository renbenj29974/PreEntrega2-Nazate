import CartWidget from '../CartWidget/CartWidget'
import "./navbar.css";
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to='/'>
        <h2 className="navbar__title">DefHelp</h2>
      </Link>
        <div className="navbar__category">
            <NavLink to={`/category/1`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><h5>Deportivo</h5></NavLink>
            <NavLink to={`/category/2`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}><h5>Cazual</h5></NavLink>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar
