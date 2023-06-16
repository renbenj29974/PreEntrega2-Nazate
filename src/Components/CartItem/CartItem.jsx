import { CartContext } from '../../Context/CartContext'
import { useContext } from "react"

const CartItem = ({name, price, quantity, id}) => {
    
  const {removeItem} = useContext (CartContext)

  return (
    <div>
      <section>
          <table class="table">
          <thead>
          <tr>
            <th><h4>Producto</h4></th>
            <th><h4>Precio</h4></th>
            <th><h4>Cantidad</h4></th>
            <th><h4>Subtotal</h4></th>
            <th>&nbsp;</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td><h5>{name}</h5></td>
              <td><h5>$ {price}</h5></td>
              <td><h5>{quantity}</h5></td>
              <td><h5>$ {price*quantity}</h5></td>
              <td><button onClick={()=> removeItem(id)} className='btn-style'>X</button></td>
            </tr>
          </tbody>
        </table> 
      </section>
    </div>
  )
}

export default CartItem
