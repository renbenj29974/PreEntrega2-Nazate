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
            <NavLink to={`/category/nZJ1yr5uwTHdEgS8erAk`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Deportivo</NavLink>
            <NavLink to={`/category/cBjbUHQ9AO26tMJGsyuo`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cazual</NavLink>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar
