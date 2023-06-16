import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

import CartContext from '../../Context/CartContext'

const ItemDetail = ({ id, name, img, categoriaId, description, price, stock }) => {
    const[quantityAdded, setQuatityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuatityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }
    
    return (
    <div className='Detalle'>
        <div className='card-title' categoria={categoriaId}></div>
            <picture>
                <img src={img} alt={name} />
            </picture>
            <div className='card-body'>
                <h3 className='card-title'><strong>{name}</strong></h3>
                <h4 className='card-title'>{description}</h4>
                <h5 className='card-title'>$ {price}</h5>

            <footer>
            {
                quantityAdded > 0 ? (
                    <Link to='/cart'>
                        <br />
                        <span className='btn-style'>Finalizar Compra</span>
                    </Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                )
            }
            </footer>
        </div>
    </div>
  )
}

export default ItemDetail
