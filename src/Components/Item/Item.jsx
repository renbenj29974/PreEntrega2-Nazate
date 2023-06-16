import { Link } from 'react-router-dom'

const Item = ({id, name, img, price, stock}) => {
  return (
<div className='tienda' id={id}>
<div className='col mb-3'>
   <picture>
  <img className='producto-imagen' src={img} alt={name} />
  </picture>
  <div className='card-body'>
     <h4 className='card-title'><strong>{name}</strong></h4>
     <h5 className='card-title'>$ {price}</h5>
  </div>
  <footer className='footer-btn'>
     <Link to={`/item/${id}`} className='btn-style'>Ver detalle</Link>
   </footer>
</div>
</div>

  )
}

export default Item
