import { useContext } from 'react'
//import cart from './assets/car.png'
import CartContext from '../../Context/CartContext'
import { Link } from 'react-router-dom'

const imageUrl = "https://www.veronicaiungman.com.ar/REACT-images/cart-fill-black.svg"
const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext)
  //style={{ display: totalQuantity > 0 ? 'block' : 'none'}}
  return (
    <Link to='/cart'>
        <img src={imageUrl} alt='cart-widget'/> { totalQuantity () }
        { totalQuantity}
    </Link>
  )
}

export default CartWidget
