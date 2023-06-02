import { useContext, useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'

import CartContext from '../../Context/CartContext'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const[quatityAdded, setQuatityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuatityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }
    
    return (
    <article>
        <header>
            <h2>
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name}/>
        </picture>
        <section>
            <p>
                Categoria: {category}
            </p>
            <p>
                Descripción: {description}
            </p>
            <p>
                Precio: {price}
            </p>
        </section>
        <footer>
            {
                quatityAdded > 0 ? (
                    <Link to='/cart' className='Option'>Finalizar compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                )
            }
        </footer>
    </article>
  )
}

export default ItemDetail
